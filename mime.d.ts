// https://github.com/broofa/node-mime

declare module "mime" {
	export function lookup(path: string): string;
	export function extension(mime: string): string;
	export function load(filepath: string): void;
	export function define(mimes: any): void;

	interface Charsets {
		lookup(mime: string): string;
	}

	export var charsets: Charsets;
}
