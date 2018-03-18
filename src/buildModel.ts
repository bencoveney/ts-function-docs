import * as TypeScript from "typescript";
import * as Glob from "glob";
import * as Model from "./model";
import * as FileSystem from "fs";
import { File } from "./getFiles";

const generateMethodDocumentationDecorator = "docGenerate";
const ignoreParameterDecorator = "docIgnore";

export function buildModel(
    files: File[]
): Model.Class[] {
    return files
        .map(processFile)
        .reduce((previous, next) => previous.concat(next), [])
}

function processFile(
    file: File
): Model.Class[] {
    // Load the file
    const sourceFile = TypeScript.createSourceFile(
        file.name,
        file.content,
        TypeScript.ScriptTarget.ES2015,
        true
    );
    return getDescendantOfKind(
        sourceFile,
        TypeScript.SyntaxKind.ClassDeclaration
    ).map(getClass);
}

/**
 * Compiles a set of comments into documentation.
 * @param docs The comments to compile.
 * @returns The compiled documentation.
 */
function compileJSDocs(
    docs?: ReadonlyArray<{ comment: string }>
): string {
    return (docs && docs.length > 0)
        ? docs.map(node => node.comment).join(" ")
        : "No documentation";
}

/**
 * Typescript builds documentation but doesn't give us convenient access to it.
 */
type DocumentedNode = TypeScript.Node & { jsDoc?: TypeScript.JSDoc[] };

/**
 * Gets the node's documentation if it can be found.
 * @param node The node to get documentation for.
 * @returns The documentation for the node.
 */
function getJSDocComment(
    node: DocumentedNode
): string {
    return compileJSDocs(node.jsDoc);
}

/**
 * Gets all children of a node that are the specified kind.
 * @param node The node to find children of.
 * @param kind The kind of children to find.
 */
function getDescendantOfKind<
    NodeKind extends TypeScript.SyntaxKind,
    NodeType extends TypeScript.Token<NodeKind>
>(
    node: TypeScript.Node,
    kind: NodeKind
): ReadonlyArray<NodeType> {
    let result: ReadonlyArray<NodeType> = [];
    TypeScript.forEachChild(
        node,
        (child: TypeScript.Node) => {
            if (child.kind === kind) {
                // Don't look any deeper if the node matches.
                result = result.concat(child as NodeType);
            } else {
                // Search deeper if not a match.
                result.concat(
                    getDescendantOfKind(
                        child,
                        kind
                    )
                );
            }
        }
    );
    return result;
}

/**
 * Extracts relevant class documentation.
 * @param node The class representation.
 * @returns The class documentation.
 */
function getClass(
    node: TypeScript.ClassDeclaration
): Model.Class {
    const methods = getDescendantOfKind(
        node,
        TypeScript.SyntaxKind.MethodDeclaration
    ).map(getMethod);

    const isIgnored = methods.every((method: Model.Method) => method.isIgnored);

    const documentation = isIgnored ? "" : getJSDocComment(node);
    const name = isIgnored ? "" : node.name.getText();

    return { name, documentation, methods, isIgnored };
}

/**
 * Extracts relevant method documentation.
 * @param node The method representation.
 * @returns The method documentation.
 */
function getMethod(
    node: TypeScript.MethodDeclaration
): Model.Method {
    const isIgnored = !node.decorators ? true : !!!node.decorators.find((decorator: TypeScript.Decorator) => {
        return decorator.expression.getText() === generateMethodDocumentationDecorator;
    });

    const parameters = isIgnored ? null : getDescendantOfKind(
        node,
        TypeScript.SyntaxKind.Parameter
    ).map(getParameter);

    const documentation = isIgnored ? "" : getJSDocComment(node);
    const name = isIgnored ? "" : node.name.getText();

    return { name, documentation, parameters, isIgnored };
}

/**
 * Extracts relevant parameter documentation.
 * @param node The parameter representation.
 * @returns The parameter documentation.
 */
function getParameter(
    node: TypeScript.ParameterDeclaration
): Model.Parameter {
    const name = node.name.getText();
    const documentation = compileJSDocs(TypeScript.getJSDocParameterTags(node));
    const isIgnored = node.decorators && !!node.decorators.find((decorator: TypeScript.Decorator) => decorator.expression.getText() === ignoreParameterDecorator);
    const type = node.type.getText();
    const isOptional = !!node.questionToken;
    const isRest = !!node.dotDotDotToken;

    return { name, documentation, type, isOptional, isIgnored, isRest };
}
