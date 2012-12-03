declare module "twig" {
	export interface Parameters {
		id?: any;
		ref?: any;
		href?: any;
		path?: any;
		debug?: bool;
		trace?: bool;
		strict_variables?: bool;
		data: any;
	}

	interface Template {
	}

	interface CompileOptions {
		filename: string;
		settings: any;
	}

	export function twig(params: Parameters): Template;
	export function extendFilter(name: string, definition: (left: any, ...params: any[]) => string): void;
	export function extendFunction(name: string, definition: (...params: any[]) => string): void;
	export function extendTest(name: string, definition: (value: any) => bool): void;
	export function extendTag(definition: any): void;
	export function compile(markup: string, options: CompileOptions): (context) => any;
	export function renderFile(path, options: CompileOptions, fn: (err, result) => void): void;
	export function __express(path, options: CompileOptions, fn: (err, result) => void): void;
	export function cache(value: bool): void;
}