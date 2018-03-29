export interface Ignorable {
    isIgnored: boolean;
}
export interface Class extends Ignorable {
    name: string;
    documentation: string;
    methods: Method[];
}
export interface Method extends Ignorable {
    name: string;
    documentation: string;
    parameters: Parameter[];
}
export interface Parameter extends Ignorable {
    name: string;
    type: string;
    documentation: string;
    isOptional: boolean;
    isRest: boolean;
}
