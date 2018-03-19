import * as Glob from "glob";
import * as FileSystem from "fs";

export interface File {
    name: string;
    content: string;
}

/**
 * Gets documentation for any matching files.
 * @param glob The test for files to process.
 * @returns The documented classes.
 */
export function getFiles(
    glob: string
): Promise<File[]> {
    return findFiles(glob).then(loadFiles);
};

/**
 * Finds all file names matching the specified glob.
 * @param glob The glob to restrict files.
 * @returns A promise that resolve to file names.
 */
function findFiles(
    glob: string
): Promise<string[]> {
    return new Promise(
        (resolve, reject) => {
            Glob(
                glob,
                {},
                (error, fileNames) => {
                    error ? reject(error) : resolve(fileNames)
                }
            );
        }
    )
};

/**
 * Loads the specified files.
 * @param fileNames The files to load.
 * @returns A promise that resolve to file content.
 */
function loadFiles(
    fileNames: string[]
): Promise<File[]> {
    return Promise.all(fileNames.map(loadFile));
};

/**
 * Loads the specified file.
 * @param fileName The file to load.
 * @returns A promise that resolve to the file's content.
 */
function loadFile(
    fileName: string
): Promise<File> {
    return new Promise(
        (resolve, reject) => FileSystem.readFile(
            fileName,
            "utf8",
            (error, content) => {
                error ? reject(error) : resolve({ name: fileName, content })
            }
        )
    )
};
