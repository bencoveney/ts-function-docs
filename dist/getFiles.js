"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Glob = require("glob");
const FileSystem = require("fs");
function getFiles(glob) {
    return findFiles(glob).then(loadFiles);
}
exports.getFiles = getFiles;
;
function findFiles(glob) {
    return new Promise((resolve, reject) => {
        Glob(glob, {}, (error, fileNames) => {
            error ? reject(error) : resolve(fileNames);
        });
    });
}
;
function loadFiles(fileNames) {
    return Promise.all(fileNames.map(loadFile));
}
;
function loadFile(fileName) {
    return new Promise((resolve, reject) => FileSystem.readFile(fileName, "utf8", (error, content) => {
        error ? reject(error) : resolve({ name: fileName, content });
    }));
}
;
//# sourceMappingURL=getFiles.js.map