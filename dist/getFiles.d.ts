export interface File {
    name: string;
    content: string;
}
export declare function getFiles(glob: string): Promise<File[]>;
