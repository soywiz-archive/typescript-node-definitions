// https://github.com/caolan/async

declare module "async" {
    export function each(values: any[], iterator: (item: any, callback: Function) => void, callback: (err: Error) => void): void;
	export function map(values: any[], generator: (err: Error, result: any) => void, callback: (err: Error, results: any[]) => void): void;
	export function filter(values: any[], generator: (err: Error, result: bool) => void, callback: (err: Error, results: any[]) => void): void;
	export function parallel(funcs: any[], callback: (err, result) => void);
    export function parallel(funcs: any, callback: (err, result : any) => void);
	//export function series(funcs: ((done: () => void) => void)[]);
	export function series(funcs: any[], callback?: (err, result) => void);
    export function waterfall(funcs: any[], callback?: (err, result) => void);

	// ...
}