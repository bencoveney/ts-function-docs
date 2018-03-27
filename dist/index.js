"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yargs = require("yargs");
const getFiles_1 = require("./getFiles");
const buildModel_1 = require("./buildModel");
const createDocumentation_1 = require("./createDocumentation");
const args = yargs.usage("Usage: $0 --input [string] --output [string]")
    .option("input", { description: "The input glob", alias: "i", default: "input/**/*.ts" })
    .option("output", { description: "The output file path", alias: "o", default: "output/documentation.md" })
    .argv;
getFiles_1.getFiles(args.input)
    .then(buildModel_1.buildModel)
    .then(classes => createDocumentation_1.createDocumentation(args.output, classes))
    .catch(console.error);
//# sourceMappingURL=index.js.map