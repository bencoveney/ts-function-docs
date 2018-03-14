import * as TypeScript from "typescript";
import * as Glob from "glob";
import * as Model from "./model";
import * as FileSystem from "fs";

/**
 * Gets documentation for any matching files.
 * @param glob The test for files to process.
 * @returns The documented classes.
 */
export function loadFiles(
    glob: string,
    complete: (documentation: Model.Class[]) => void
): void {
    // Find related files.
    Glob(
        glob,
        {},
        (error: Error, fileNames: string[]) => {
            // Did anything go wrong?
            if (error) {
                console.error(error);
            }
            // Process each found file
            complete(
                fileNames.reduce(
                    (classes: Model.Class[], fileName) => classes.concat(
                        getFileDocumentation(fileName)
                    ),
                    []
                )
            );
        }
    );
};

/**
 * Gets the documentation for the specified file
 * @param fileName
 */
function getFileDocumentation(
    fileName: string
): Model.Class[] {
    // Load the file
    const file = TypeScript.createSourceFile(
        fileName,
        FileSystem.readFileSync(fileName).toString(),
        TypeScript.ScriptTarget.ES2015,
        true
    );
    return getDescendantOfKind(
        file,
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

    const documentation = getJSDocComment(node);
    const name = node.name.getText();

    return { name, documentation, methods };
}

/**
 * Extracts relevant method documentation.
 * @param node The method representation.
 * @returns The method documentation.
 */
function getMethod(
    node: TypeScript.MethodDeclaration
): Model.Method {
    const parameters = getDescendantOfKind(
        node,
        TypeScript.SyntaxKind.Parameter
    ).map(getParameter);

    const documentation = getJSDocComment(node);
    const name = node.name.getText();

    return { name, documentation, parameters };
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
    const hasDecorators = !!node.decorators;
    const type = node.type.getText();
    const isOptional = !!node.questionToken;
    const isRest = !!node.dotDotDotToken;

    return { name, documentation, type, isOptional, hasDecorators, isRest };
}
