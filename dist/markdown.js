"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function wrap(text, wrapper) {
    return `${wrapper}${text}${wrapper}`;
}
function makeItalic(text) {
    return wrap(text, "*");
}
exports.makeItalic = makeItalic;
function makeBold(text) {
    return wrap(text, "**");
}
exports.makeBold = makeBold;
function makeCode(text) {
    return wrap(text, "`");
}
exports.makeCode = makeCode;
function makeMultiLineCode(text, language) {
    const content = `${language}
${text}
`;
    return wrap(content, "```");
}
exports.makeMultiLineCode = makeMultiLineCode;
function makeHeading(text) {
    return `${text}
${"=".repeat(text.length)}`;
}
exports.makeHeading = makeHeading;
function makeSubheading(text) {
    return `${text}
${"-".repeat(text.length)}`;
}
exports.makeSubheading = makeSubheading;
function padRightSpaces(text, length) {
    return text + " ".repeat(length - text.length);
}
function transpose(twoDArray) {
    return twoDArray[0].map((unused, innerIndex) => twoDArray.map(innerArray => innerArray[innerIndex]));
}
function makeTable(headings, rows) {
    const numberOfHeadings = headings.length;
    const mismatchedRows = rows.filter(row => row.length !== numberOfHeadings);
    if (mismatchedRows.length) {
        throw new Error(`${mismatchedRows.length} rows didn't have ${numberOfHeadings} headings.`);
    }
    const columns = transpose(rows);
    const processedColumns = headings.map((heading, index) => {
        const content = columns[index];
        const longestContent = content
            .concat(heading)
            .map(content => content.length)
            .reduce((biggest, next) => Math.max(biggest, next), 0);
        const divider = "-".repeat(longestContent);
        const allContent = [heading, divider, ...content];
        return allContent.map(cell => padRightSpaces(cell, longestContent));
    });
    const processedRows = transpose(processedColumns);
    return processedRows.map(row => ["", ...row, ""].join("|")).join("\n");
}
exports.makeTable = makeTable;
//# sourceMappingURL=markdown.js.map