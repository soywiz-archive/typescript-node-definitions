// https://github.com/substack/node-mkdirp

declare module "mkdirp" {
	export function(path: string, callback: (err: Error) => void): void;
	export function(path: string, mode: number, callback: (err: Error) => void): void;
	export function sync(path: string, mode: number): void;
}