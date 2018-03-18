# ts-function-docs

Experimenting with generating documentation using the TypeScript compiler.

Look at `/input` and `/output` for examples.

Currently documents classes, their methods and parameters. Only methods with the `@docGenerate` method decorator have the documentation generated.
Parameters with the `@docIgnore` parameter decorator are excluded.
