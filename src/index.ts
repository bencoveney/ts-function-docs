import { loadFiles } from "./loadFiles";
import { createDocumentation } from "./createDocumentation";

loadFiles(
    "input/**/*.ts",
    model => createDocumentation("output/documentation.md", model)
);
