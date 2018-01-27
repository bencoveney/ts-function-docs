/** A documented class. */
export interface Class {
    /** The classes name. */
    name: string;
    /** The compiled class documentation. */
    documentation: string;
    /** The methods the class contains. */
    methods: Method[];
};

/** A documented methods. */
export interface Method {
    /** The name of the method. */
    name: string;
    /** The compiled method documentation. */
    documentation: string;
    /** Parameters for the method. */
    parameters: Parameter[];
};

/** A documented function parameter. */
export interface Parameter {
    /** The name of the parameter. */
    name: string;
    /** The type of the parameter. */
    type: string;
    /** The compiled parameter documentation. */
    documentation: string;
    /** Whether the parameter is optional. */
    isOptional: boolean;
    /** Whether the parameter has decorators. */
    hasDecorators: boolean;
};
