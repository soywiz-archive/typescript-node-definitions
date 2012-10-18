// glob updated: 3.1.14
// https://github.com/isaacs/node-glob

declare module "glob" {
	import glob = module("glob");

	export function(pattern: string, callback: (err: Error, files: string[]) => void);
	export function(pattern: string, options: Options, callback: (err: Error, files: string[]) => void);

	export function sync(pattern: string, options?: Options) : string[];

	export interface Glob extends EventEmitter {
		// event: end
		// event: match
		// event: error
		// event: abort

		constructor (pattern: string, callback: (err: Error, files: string[]) => void);
		constructor (pattern: string, options: Options, callback: (err: Error, files: string[]) => void);

		abort();

		minimatch: any;
		options: Options;
		error: Error;
		aborted: bool;
	}

	export interface Options {
		cwd?: string;
		root?: string;
		nomount?: bool;
		mark?: string;
		nosort?: bool;
		stat?: bool;
		silent?: bool;
		strict?: bool;
		statCache?;
		sync?: bool;
		nounique?: bool;
		nonull?: bool;
		nocase?: bool;
		debug?: bool;
		globDebug?: bool;
	}
}