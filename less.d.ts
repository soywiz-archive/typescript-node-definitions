module "less" {
	export var version: number[];
	export class Parser {
	}
	export class importer {
	}
	export class tree {
	}
	interface RenderOptions {
		compress?: bool;
		yuicompress?: bool;
	}
	export function render(input : string, callback : (err : Error, result: string) => void) : void;
	export function render(input : string, options : RenderOptions, callback : (err : Error, result: string) => void) : void;
	export function writeError(ctx, options);
}