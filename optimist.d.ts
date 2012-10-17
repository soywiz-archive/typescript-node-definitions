// https://github.com/substack/node-optimist

declare module "optimist" {
	import optimist = module("optimist");

	export class Optimist {
		default(name: string, value: any): Optimist;
		default(args: any): Optimist;

		boolean(name: string): Optimist;
		boolean(names: string[]): Optimist;

		string(name: string): Optimist;
		string(names: string[]): Optimist;

		wrap(columns): Optimist;

		help(): Optimist;
		showHelp(fn: Function): Optimist;

		usage(message: string): Optimist;
		
		demand(key: string): Optimist;
		demand(key: number): Optimist;
		demand(key: string[]): Optimist;

		alias(key: string, alias: string): Optimist;

		describe(key: string, desc: string): Optimist;

		options(key: string, opt: any): Optimist;

		check(fn: Function);

		parse(args: string[]): Optimist;

		argv: Argv;
	}

	export function default(name: string, value: any): Optimist;
	export function default(args: any): Optimist;

	export function boolean(name: string): Optimist;
	export function boolean(names: string[]): Optimist;

	export function string(name: string): Optimist;
	export function string(names: string[]): Optimist;

	export function wrap(columns): Optimist;

	export function help(): Optimist;
	export function showHelp(fn: Function): Optimist;

	export function usage(message: string): Optimist;
		
	export function demand(key: string): Optimist;
	export function demand(key: number): Optimist;
	export function demand(key: string[]): Optimist;

	export function alias(key: string, alias: string): Optimist;

	export function describe(key: string, desc: string): Optimist;

	export function options(key: string, opt: any): Optimist;

	export function check(fn: Function);

	export function parse(args: string[]): Optimist;

	export var argv: Argv;

	export function(args: string[]): Optimist;

	export interface Argv {
		_: string[];
	}
}