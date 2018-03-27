"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TypeScript = require("typescript");
const generateMethodDocumentationDecorator = "docGenerate";
const ignoreParameterDecorator = "docIgnore";
function buildModel(files) {
    return files
        .map(processFile)
        .reduce((previous, next) => previous.concat(next), []);
}
exports.buildModel = buildModel;
function processFile(file) {
    const sourceFile = TypeScript.createSourceFile(file.name, file.content, TypeScript.ScriptTarget.ES2015, true);
    return getDescendantOfKind(sourceFile, TypeScript.SyntaxKind.ClassDeclaration).map(getClass);
}
function compileJSDocs(docs) {
    return (docs && docs.length > 0)
        ? docs.map(node => node.comment).join(" ")
        : "No documentation";
}
function getJSDocComment(node) {
    return compileJSDocs(node.jsDoc);
}
function getDescendantOfKind(node, kind) {
    let result = [];
    TypeScript.forEachChild(node, (child) => {
        if (child.kind === kind) {
            result = result.concat(child);
        }
        else {
            result = result.concat(getDescendantOfKind(child, kind));
        }
    });
    return result;
}
function getClass(node) {
    const methods = getDescendantOfKind(node, TypeScript.SyntaxKind.MethodDeclaration).map(getMethod);
    const isIgnored = methods.every((method) => method.isIgnored);
    const documentation = isIgnored ? "" : getJSDocComment(node);
    const name = isIgnored ? "" : node.name.getText();
    return { name, documentation, methods, isIgnored };
}
function getMethod(node) {
    const isIgnored = !node.decorators ? true : !node.decorators.find((decorator) => {
        return decorator.expression.getText() === generateMethodDocumentationDecorator;
    });
    if (isIgnored) {
        return { isIgnored, name: "", documentation: "", parameters: [] };
    }
    const parameters = Array
        .from(node.parameters)
        .map(getParameter);
    const documentation = getJSDocComment(node);
    const name = node.name.getText();
    return { name, documentation, parameters, isIgnored };
}
function getParameter(node) {
    const name = node.name.getText();
    const documentation = compileJSDocs(TypeScript.getJSDocParameterTags(node));
    const isIgnored = node.decorators && !!node.decorators.find((decorator) => decorator.expression.getText() === ignoreParameterDecorator);
    const type = node.type.getText();
    const isOptional = !!node.questionToken;
    const isRest = !!node.dotDotDotToken;
    return { name, documentation, type, isOptional, isIgnored, isRest };
}
//# sourceMappingURL=buildModel.js.map