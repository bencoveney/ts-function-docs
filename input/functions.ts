
function docIgnore (target: Object, propertyKey: string | symbol, parameterIndex: number) {
}

function otherParamDecorator (target: Object, propertyKey: string | symbol, parameterIndex: number) {
}

function docGenerate (target: Object, key: string | symbol, descriptor: Object) {
}

function otherMethodDecorator (target: Object, key: string | symbol, descriptor: Object) {
}

/**
 * This class has documented methods.
 */
export class documentedClass {
    // Static methods:

    @docGenerate
    public static publicStaticNoDocsNoParams(): void
    {
    }

    /**
     * Fully documented static method.
     */
    @docGenerate
    public static publicStaticWithDocsNoParams(): void
    {
    }

    @docGenerate
    public static publicStaticNoDocsWithParams(name: string, age: number): void
    {
    }

    /**
     * Fully documented static method with parameters.
     * @param name A string parameter.
     * @param age A number parameter.
     */
    @docGenerate
    public static publicStaticWithDocsWithParams(name: string, age: number): void
    {
    }

    /**
     * Ignored static method with parameters.
     * @param name A string parameter.
     * @param age A number parameter.
     */
    public static publicStaticNotGeneratedWithDocsWithParams(name: string, age: number): void
    {
    }

    /**
     * Fully documented static method with multiple method decorators and parameters.
     * @param name A string parameter.
     * @param age A number parameter.
     */
    @otherMethodDecorator
    @docGenerate
    public static publicStaticWithDocsWithParamsMultipleDecorators(name: string, age: number): void
    {
    }

    /**
     * Fully documented static method with parameters and a return type.
     * @param name A string parameter.
     * @param age A number parameter.
     * @returns A number return value.
     */
    @docGenerate
    public static publicStaticWithDocsWithParamsWithReturn(name: string, age: number): number
    {
        return 1;
    }

    /**
     * Fully documented static method with ignored parameters.
     * @param name A string parameter.
     * @param age A number parameter.
     */
    @docGenerate
    public static publicStaticWithDocsWithIgnoredParams(@docIgnore name: string, @otherParamDecorator age: number): void
    {
    }

    /**
     * Fully documented static method with optional parameters.
     * @param name A string parameter.
     * @param age An optional number parameter.
     */
    @docGenerate
    public static publicStaticWithDocsWithOptionalParams(name: string, age?: number): void
    {
    }

    /**
     * Fully documented static method with rest parameters.
     * @param name A string parameter.
     * @param ages A rest parameter.
     */
    @docGenerate
    public static publicStaticWithDocsWithRestParams(name: string, ...ages: number[]): void
    {
    }

    /**
     * Fully documented private static method.
     * @param name A string parameter.
     * @param age A number parameter.
     */
    @docGenerate
    private static privateStaticWithDocsWithParams(name: string, age: number): void
    {
    }

    /**
     * Ignored private static method.
     * @param name A string parameter.
     * @param age A number parameter.
     */
    private static privateStaticNotGeneratedWithDocsWithParams(name: string, age: number): void
    {
    }

    // Non-static methods:

    @docGenerate
    public publicNoDocsNoParams(): void
    {
    }

    /**
     * Fully documented method.
     */
    @docGenerate
    public publicWithDocsNoParams(): void
    {
    }

    @docGenerate
    public publicNoDocsWithParams(name: string, age: number): void
    {
    }

    /**
     * Fully documented method with parameters.
     * @param name A string parameter.
     * @param age A number parameter.
     */
    @docGenerate
    public publicWithDocsWithParams(name: string, age: number): void
    {
    }

    /**
     * Ignored method with parameters.
     * @param name A string parameter.
     * @param age A number parameter.
     */
    public publicNotGeneratedWithDocsWithParams(name: string, age: number): void
    {
    }

    /**
     * Fully documented method with multiple method decorators and parameters.
     * @param name A string parameter.
     * @param age A number parameter.
     */
    @otherMethodDecorator
    @docGenerate
    public publicWithDocsWithParamsMultipleDecorators(name: string, age: number): void
    {
    }

    /**
     * Fully documented method with parameters and a return type.
     * @param name A string parameter.
     * @param age A number parameter.
     * @returns A number return value.
     */
    @docGenerate
    public publicWithDocsWithParamsWithReturn(name: string, age: number): number
    {
        return 1;
    }

    /**
     * Fully documented method with ignored parameters.
     * @param name A string parameter.
     * @param age A number parameter.
     */
    @docGenerate
    public publicWithDocsWithIgnoredParams(@docIgnore name: string, @otherParamDecorator age: number): void
    {
    }

    /**
     * Fully documented method with optional parameters.
     * @param name A string parameter.
     * @param age An optional number parameter.
     */
    @docGenerate
    public publicWithDocsWithOptionalParams(name: string, age?: number): void
    {
    }

    /**
     * Fully documented method with rest parameters.
     * @param name A string parameter.
     * @param ages A rest parameter.
     */
    @docGenerate
    public publicWithDocsWithRestParams(name: string, ...ages: number[]): void
    {
    }

    /**
     * Fully documented private method.
     * @param name A string parameter.
     * @param age A number parameter.
     */
    @docGenerate
    private privateWithDocsWithParams(name: string, age: number): void
    {
    }

    /**
     * Ignored private method.
     * @param name A string parameter.
     * @param age A number parameter.
     */
    private privateNotGeneratedWithDocsWithParams(name: string, age: number): void
    {
    }

    /**
     * Documented method with inner parameters.
     * @param sentence A string parameter.
     */
    @docGenerate
    public publicWithDocsWithInnerParams(sentence: string): void
    {
        sentence.split(" ").map((word) => console.log(word));
    }
}
