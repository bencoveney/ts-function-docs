import { getFiles } from "./getFiles";
import { buildModel } from "./buildModel";
import { createDocumentation } from "./createDocumentation";
import { Class } from "./model";

getFiles("input/**/*.ts")
    .then(buildModel)
    .then(classes => createDocumentation("output/documentation.md", classes))
    .catch(console.error);
