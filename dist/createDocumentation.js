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
        .map(parameter => {
        const restMark = parameter.isRest ? "..." : "";
        const optionalMark = parameter.isOptional ? "?" : "";
        const types = parameter.types.join(" | ");
        return `${restMark}${parameter.name}${optionalMark}: ${types}`;
    })
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
        parameter.types.map(Markdown.makeCode).join(" or "),
        toYesNo(parameter.isOptional),
        toYesNo(parameter.isRest),
        parameter.documentation,
    ]));
}
function getSampleValues(parameter) {
    return parameter.types
        .map(type => getSampleValue(parameter.name, type))
        .join(" or ");
}
function getSampleValue(name, type) {
    switch (type) {
        case "number":
            return "0";
        case "string":
            return `"My ${Case.lower(name)}"`;
        case "string[]":
            return [1, 2, 3].map(index => `"${name} ${index}"`).join(", ");
        case "number[]":
            return [1, 2, 3].map(index => `${index}`).join(", ");
        default:
            return "X";
    }
}
function createSample(method) {
    const parameterValues = method.parameters.filter(isIgnored).map(getSampleValues);
    const content = `// Sample
${method.name}(${parameterValues.join(", ")});`;
    return Markdown.makeMultiLineCode(content, "JavaScript");
}
//# sourceMappingURL=createDocumentation.js.map