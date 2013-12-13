declare module "mu2" {
    export var root: string;

    export function compileAndRender(templateName: string, view: any) : ReadableStream;

    export function compile(filename: string, callback: (err, parsed: IParsed) => void): void;

    export function compileText(name: string, template: string, callback: (err, parsed: IParsed) => void): void;
    export function compileText(name: string, template: string): IParsed;
    export function compileText(template: string): IParsed;

    export function render(filenameOrParsed: string, view: any): ReadableStream;
    export function render(filenameOrParsed: IParsed, view: any): ReadableStream;

    export function renderText(template: string, view : any, partials? :any) : ReadableStream; 
    
    export function clearCache(templateName?: string) : void;
    
    export interface IParsed { }
}