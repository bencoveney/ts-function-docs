"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FileSystem = require("fs");
const Markdown = require("./markdown");
const Case = require("case");
function createDocumentation(location, classes) {
    const output = buildString(classes.filter(isIgnored), documentClass);
    FileSystem.writeFileSync(location, output, { encoding: "UTF8" });
}
exports.createDocumentation = createDocumentation;
function buildString(items, builder) {
    return items.reduce((previous, next) => previous + builder(next), "");
}
function documentClass(_class) {
    return `
${Markdown.makeHeading(_class.name)}

${_class.documentation}

${buildString(_class.methods.filter(isIgnored), documentMethod)}
`;
}
function documentMethod(method) {
    const callSignature = documentSignature(method);
    return `
${Markdown.makeSubheading(callSignature)}

${method.documentation}

${documentParameters(method.parameters.filter(isIgnored))}

${createSample(method)}
`;
}
function isIgnored(documentedObject) {
    return !documentedObject.isIgnored;
}
function documentSignature(method) {
    const parameters = method.parameters
        .filter(isIgnored)
        .map(parameter => `${parameter.isRest ? "..." : ""}${parameter.name}${parameter.isOptional ? "?" : ""}: ${parameter.type}`)
        .join(", ");
    return Markdown.makeCode(`${method.name}(${parameters})`);
}
function toYesNo(condition) {
    return condition ? Markdown.makeItalic("Yes") : "No";
}
function documentParameters(parameters) {
    if (parameters.length == 0) {
        return "";
    }
    return Markdown.makeTable([
        "Parameter",
        "Type",
        "Optional?",
        "Multiple?",
        "Description"
    ], parameters.map(parameter => [
        Markdown.makeBold(parameter.name),
        Markdown.makeCode(parameter.type),
        toYesNo(parameter.isOptional),
        toYesNo(parameter.isRest),
        parameter.documentation,
    ]));
}
function getSampleValue(parameter) {
    switch (parameter.type) {
        case "number":
            return "0";
        case "string":
            return `"My ${Case.lower(parameter.name)}"`;
        case "string[]":
            return [1, 2, 3].map(index => `"${parameter.name} ${index}"`).join(", ");
        case "number[]":
            return [1, 2, 3].map(index => `${index}`).join(", ");
        default:
            return "X";
    }
}
function createSample(method) {
    const parameterValues = method.parameters.filter(isIgnored).map(getSampleValue);
    const content = `// Sample
${method.name}(${parameterValues.join(", ")});`;
    return Markdown.makeMultiLineCode(content, "JavaScript");
}
//# sourceMappingURL=createDocumentation.js.map