import * as Model from "./model";
import * as FileSystem from "fs";
import { Parameter } from "./model";

export function createDocumentation(location: string, classes: Model.Class[]) {
    const output = buildString(classes, documentClass)
    FileSystem.writeFileSync(
        location,
        output,
        { encoding: "UTF8" }
    );
}

function buildString<Type>(
    items: Type[],
    builder: (item: Type) => string
): string {
    return items.reduce(
        (previous, next) => previous + builder(next),
        ""
    );
}

function documentClass(_class: Model.Class): string {
    return `
${_class.name}
${"=".repeat(_class.name.length)}

${_class.documentation}

${buildString(_class.methods, documentMethod)}
`;
}

function documentMethod(method: Model.Method): string {
    const callSignature = documentSignature(method);
    return `
${callSignature}
${"-".repeat(callSignature.length)}

${method.documentation}

${documentParameters(removeDecoratedParameters(method.parameters))}
`;
}

function removeDecoratedParameters(parameters: Parameter[]): Parameter[] {
    return parameters.filter(parameter => !parameter.hasDecorators);
}

function documentSignature(method: Model.Method): string {
    const parameters = removeDecoratedParameters(method.parameters)
        .map(parameter => `${parameter.isRest ? "..." : ""}${parameter.name}${parameter.isOptional ? "?" : ""}: ${parameter.type}`)
        .join(", ");

    return `\`${method.name}(${parameters})\``;
}

function getMaxLength(words: string[]): number {
    return words
        .map(word => word.length)
        .reduce((biggest, next) => Math.max(biggest, next), 0);
}

function padRightSpaces(text: string, length: number): string {
    return text + " ".repeat(length - text.length);
}

function toYesNo(condition: boolean): string {
    return condition ? "Yes" : "No";
}

function documentParameters(parameters: Model.Parameter[]): string {
    if (parameters.length == 0) {
        return "";
    }

    const nameHeader = "Parameter";
    const longestName = getMaxLength(
        parameters.map(parameter => parameter.name).concat(nameHeader)
    );

    const typeHeader = "Type";
    const longestType = getMaxLength(
        parameters.map(parameter => parameter.type).concat(typeHeader)
    );

    const optionalHeader = "Optional?";
    const longestOptional = getMaxLength(
        parameters.map(parameter => toYesNo(parameter.isOptional)).concat(optionalHeader)
    );

    const restHeader = "Multiple?";
    const longestRest = getMaxLength(
        parameters.map(parameter => toYesNo(parameter.isRest)).concat(restHeader)
    );

    const descriptionHeader = "Description";
    const longestDescription = getMaxLength(
        parameters.map(parameter => parameter.documentation).concat(descriptionHeader)
    );

    const headers = [
        {
            name: nameHeader,
            type: typeHeader,
            isOptional: optionalHeader,
            isRest: restHeader,
            documentation: descriptionHeader
        },
        {
            name:"-".repeat(longestName),
            type: "-".repeat(longestType),
            isOptional: "-".repeat(longestOptional),
            isRest: "-".repeat(longestRest),
            documentation: "-".repeat(longestDescription)
        }
    ];

    return headers
        .concat(
            parameters.map(
                parameter => ({
                    name: parameter.name,
                    type: parameter.type,
                    isOptional: toYesNo(parameter.isOptional),
                    isRest: toYesNo(parameter.isRest),
                    documentation: parameter.documentation,
                })
            )
        )
        .map(
            parameter => [
                "",
                padRightSpaces(parameter.name, longestName),
                padRightSpaces(parameter.type, longestType),
                padRightSpaces(parameter.isOptional, longestOptional),
                padRightSpaces(parameter.isRest, longestRest),
                padRightSpaces(parameter.documentation, longestDescription),
                ""
            ]
            .join("|")
        )
        .join("\n");
}
