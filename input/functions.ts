
function ignore (target: Object, propertyKey: string | symbol, parameterIndex: number) {
    console.log("f(): called");
}

/**
 * Class documentation
 */
export class myClass {
    public static noDocsNoParams() {
        console.log("Hello World");
    }

    /**
     * This one has documentation
     */
    public static withDocsNoParams() {
        console.log("Hello World");
    }

    public static noDocsWithParams(sample: string) {
        console.log("Hello World");
    }

    /**
     * This one has documentation but not for the parameter.
     */
    public static someDocsWithParams(sample: string) {
        console.log("Hello World");
    }

    /**
     * This one has documentation.
     * @param sample The parameter is documented too.
     */
    public static withDocsWithParams(sample: string) {
        console.log("Hello World");
    }

    public static noDocsWithParamsDecorated(@ignore sample: string, other: number) {
        console.log("Hello World");
    }

    /**
     * This one has documentation.
     * @param sample A parameter with a decorator.
     * @param other The parameter is documented too.
     */
    public static withDocsWithParamsDecorated(@ignore sample: string, other: number) {
        console.log("Hello World");
    }

    /**
     * This one has documentation.
     * @param other The parameter is documented too.
     * @param optional An optional parameter.
     */
    public static withDocsWithOptionalParams(other: number, optional?: string) {
        console.log("Hello World");
    }
}
