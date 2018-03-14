// Wraps the text with the specified character.
function wrap(term: string, wrapper: string) {
    return `${wrapper}${term}${wrapper}`;
}

// Makes the specified text italic.
export function makeItalic(term: string) {
    return wrap(term, "*");
}

// Makes the specified text bold.
export function makeBold(term: string) {
    return wrap(term, "**");
}

// Converts the specified text to code.
export function makeCode(term: string) {
    return wrap(term, "`");
}

// Converts the specified text to a top-level heading.
export function makeHeading(term: string) {
    return `${term}
${"=".repeat(term.length)}`
}

// Converts the specified text to a sub-heading.
export function makeSubheading(term: string) {
    return `${term}
${"-".repeat(term.length)}`
}

// Pads the string to the specified length with spaces.
function padRightSpaces(text: string, length: number): string {
    return text + " ".repeat(length - text.length);
}

// Flips the rows and columns of a two-dimensional array.
function transpose<Type>(twoDArray: Type[][]) {
    return twoDArray[0].map(
        (unused, innerIndex) => twoDArray.map(
            innerArray => innerArray[innerIndex]
        )
    );
}

// Creates a table with the specified headings and columns.
export function makeTable(headings: string[], rows: string[][]) {
    // Sanity check - Are all the rows the same length as the header?
    const numberOfHeadings = headings.length;
    const mismatchedRows = rows.filter(row => row.length !== numberOfHeadings);
    if (mismatchedRows.length) {
        throw new Error(`${mismatchedRows.length} rows didn't have ${numberOfHeadings} headings.`);
    }

    // Combine and preprocess the column headings and content.
    const columns = transpose(rows);
    const processedColumns = headings.map(
        (heading, index) => {
            const content = columns[index];

            // Calculate what the widest thing (including headers) will be.
            const longestContent = content
                .concat(heading)
                .map(content => content.length)
                .reduce((biggest, next) => Math.max(biggest, next), 0);

            // Create the dividing line to go between the header and content.
            const divider = "-".repeat(longestContent);

            // Collect everything that will be in the column.
            const allContent = [heading, divider, ...content];

            // Pad the right edge with spaces to preserve layout when viewing as text.
            return allContent.map(cell => padRightSpaces(cell, longestContent))
        }
    );

    // Build the processed column content into a table.
    const processedRows = transpose(processedColumns);
    return processedRows.map(row => ["", ...row, ""].join("|")).join("\n")
}
