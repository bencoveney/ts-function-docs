import * as Model from "./model";
import * as FileSystem from "fs";
import * as Markdown from "./markdown";
import * as Case from "case";

// Builds the documentation and writes it to the specified location on disk.
export function createDocumentation(location: string, classes: Model.Class[]) {
    const output = buildString(classes.filter(isIgnored), documentClass)
    FileSystem.writeFileSync(
        location,
        output,
        { encoding: "UTF8" }
    );
}

// Compiles a string by mapping each item through the specified builder and concatenating the result.
function buildString<Type>(
    items: Type[],
    builder: (item: Type) => string
): string {
    return items.reduce(
        (previous, next) => previous + builder(next),
        ""
    );
}

// Creates class documentation.
function documentClass(_class: Model.Class): string {
    return `
${Markdown.makeHeading(_class.name)}

${_class.documentation}

${buildString(_class.methods.filter(isIgnored), documentMethod)}
`;
}

// Creates method documentation.
function documentMethod(method: Model.Method): string {
    const callSignature = documentSignature(method);
    return `
${Markdown.makeSubheading(callSignature)}

${method.documentation}

${documentParameters(method.parameters.filter(isIgnored))}

${createSample(method)}
`;
}

// Filters out ignored objects.
function isIgnored(documentedObject: Model.Ignorable): boolean {
    return !documentedObject.isIgnored;
}

// Creates method signature documentation.
function documentSignature(method: Model.Method): string {
    const parameters = method.parameters
        .filter(isIgnored)
        .map(
            parameter => {
                const restMark = parameter.isRest ? "..." : "";
                const optionalMark = parameter.isOptional ? "?" : "";
                const types = parameter.types.join(" | ");
                return `${restMark}${parameter.name}${optionalMark}: ${types}`;
            }
        )
        .join(", ");

    return Markdown.makeCode(`${method.name}(${parameters})`);
}

// Converts booleans to a more readable format.
function toYesNo(condition: boolean): string {
    return condition ? Markdown.makeItalic("Yes") : "No";
}

//  Creates documentation for parameters.
function documentParameters(parameters: Model.Parameter[]): string {
    if (parameters.length == 0) {
        return "";
    }

    return Markdown.makeTable(
        [
            "Parameter",
            "Type",
            "Optional?",
            "Multiple?",
            "Description"
        ],
        parameters.map(
            parameter => [
                Markdown.makeBold(parameter.name),
                parameter.types.map(Markdown.makeCode).join(" or "),
                toYesNo(parameter.isOptional),
                toYesNo(parameter.isRest),
                parameter.documentation,
            ]
        )
    );
}

// Guesses a simple sample value for each parameter value.
function getSampleValues(parameter: Model.Parameter): string {
    return parameter.types
        .map(type => getSampleValue(parameter.name, type))
        .join(" or ");
}

// Guesses a simple sample value for each parameter value.
function getSampleValue(name: string, type: string): string {
    switch (type) {
        case "number":
            return "0";
        case "string":
            return `"My ${Case.lower(name)}"`;
        case "string[]":
            return [1,2,3].map(index => `"${name} ${index}"`).join(", ");
        case "number[]":
            return [1,2,3].map(index => `${index}`).join(", ");
        default:
            return "X";
    }
}

// Creates a code sample showing how a method could be called.
function createSample(method: Model.Method) {
    const parameterValues = method.parameters.filter(isIgnored).map(getSampleValues);
    const content = `// Sample
${method.name}(${parameterValues.join(", ")});`

    return Markdown.makeMultiLineCode(content, "JavaScript");
}
