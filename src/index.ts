import * as yargs from "yargs";

import { getFiles } from "./getFiles";
import { buildModel } from "./buildModel";
import { createDocumentation } from "./createDocumentation";
import { Class } from "./model";
import { Argv } from "yargs"

const args = yargs.usage("Usage: $0 --input [string] --output [string]")
    .option("input", { description: "The input glob", alias: "i", default: "input/**/*.ts" })
    .option("output", { description: "The output file path", alias: "o", default: "output/documentation.md" })
    .argv;

getFiles(args.input)
    .then(buildModel)
    .then(classes => createDocumentation(args.output, classes))
    .catch(console.error);
