// https://github.com/ryanmcgrath/wrench-js

declare module "wrench" {
	export function readdirSyncRecursive(baseDir: string): string[];
	export function rmdirSyncRecursive(path: string, failSilent?: bool);
	export function copyDirSyncRecursive(sourceDir: string, newDirLocation: string, opts: { preserve?: bool; }): void;
	export function chmodSyncRecursive(sourceDir: string, filemode: number): void;
	export function chownSyncRecursive(sourceDir: string, uid: any, gid: any): void;
	export function mkdirSyncRecursivefunction(path: string, mode: number): void;

	export function readdirRecursive(baseDir: string, fn: (err: Error, files: string[]) => void): void;
	export function rmdirRecursive(path: string, fn: (err: Error) => void): void;
	export function copyDirRecursive(srcDir: string, newDir: string, fn: (err: Error) => void): void;

	export class LineReader {
		constructor (filename: string, bufferSize?: number);
		
		getBufferAndSetCurrentPosition(position: number): number;
		hasNextLine(): bool;
		getNextLine(): string;
	}
}