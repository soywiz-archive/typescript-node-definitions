declare module "less" {
	export var version: number[];
	export class tree {
		toCSS(options: RenderOptions) : string;
	}
	export class Parser {
		constructor (options?: ParserOptions);
		parse(text: string, callback: (error : Error, tree : tree) => void);
	}
	export class importer {
	}

	interface ParserOptions {
		paths?: string[];
		filename?: string;
	}

	interface RenderOptions {
		compress?: boolean;
		yuicompress?: boolean;
	}

	export function render(input : string, callback : (err : Error, result: string) => void) : void;
	export function render(input : string, options : RenderOptions, callback : (err : Error, result: string) => void) : void;
	export function writeError(ctx, options);
}