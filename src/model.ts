export interface Ignorable {
    /** Whether this documented object is ignored. */
    isIgnored: boolean;
}

/** A documented class. */
export interface Class extends Ignorable {
    /** The classes name. */
    name: string;
    /** The compiled class documentation. */
    documentation: string;
    /** The methods the class contains. */
    methods: Method[];
};

/** A documented methods. */
export interface Method extends Ignorable {
    /** The name of the method. */
    name: string;
    /** The compiled method documentation. */
    documentation: string;
    /** Parameters for the method. */
    parameters: Parameter[];
};

/** A documented function parameter. */
export interface Parameter extends Ignorable {
    /** The name of the parameter. */
    name: string;
    /** The type of the parameter. */
    type: string;
    /** The compiled parameter documentation. */
    documentation: string;
    /** Whether the parameter is optional. */
    isOptional: boolean;
    /** Whether the parameter is a rest parameter. */
    isRest: boolean;
};
