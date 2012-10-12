// Underscore 1.4.2

// http://underscorejs.org
// http://github.com/documentcloud/underscore

// NOTE:
// Typescript doesn't currently support generics. This library definition
// will benefit largely with generics when available.

// Collections
declare module "underscore" {
	export function each(list: any[], iterator: (item: any) => void, context?: any) : void;
	export function each(list: any, iterator: (item: any, key: any) => void, context?: any) : void;

	export function forEach(list: any[], iterator: (item: any) => void, context?: any) : void;
	export function forEach(list: any, iterator: (item: any, key: any) => void, context?: any) : void;
	
	export function map(list, iterator, context?);
	export function collect(list, iterator, context?);
	
	export function reduce(list, iterator, memo, context?);
	export function inject(list, iterator, memo, context?);
	export function foldl(list, iterator, memo, context?);

	
	export function reduceRight(list, iterator, memo, context?);
	export function foldr(list, iterator, memo, context?);
	
	export function find(list : any[], iterator : (item) => bool, context?) : any;
	export function detect(list : any[], iterator : (item) => bool, context?) : any;
	
	export function filter(list : any[], iterator : (item) => bool, context?) : any[];
	export function select(list : any[], iterator : (item) => bool, context?) : any[];

	export function where(list : any[], properties : any) : any[];
	export function reject(list : any[], iterator : (item) => bool, context?) : any[];
	
	export function all(list : any[], iterator : (item) => bool, context?) : bool;
	export function every(list : any[], iterator : (item) => bool, context?) : bool;

	export function any(list : any[], iterator : (item) => bool, context?) : bool;
	export function some(list : any[], iterator : (item) => bool, context?) : bool;

	export function contains(list : any[], value: any) : bool;
	export function include(list : any[], value: any) : bool;

	export function invoke(list : any[], methodName: string, ...arguments : any[]) : bool;
	export function invoke(list : any[], method: Function, ...arguments : any[]) : bool;

	export function pluck(list : any[], propertyName : string) : any[];
	export function max(list : any[], iterator : (item) => any, context?) : any;
	export function min(list : any[], iterator : (item) => any, context?) : any;
	
	export function sortBy(list : any[], iterator : (item) => any, context?) : any[];
	export function groupBy(list : any[], iterator : (item) => any) : any;
	export function countBy(list : any[], iterator : (item) => string) : any;

	export function shuffle(list : any[]) : any[];

	export function toArray(list : any) : any[];
	export function size(list : any) : number;

}

// Array Functions
declare module "underscore" {
	export function first(array : any[]) : any;
	export function first(array : any[], n : number) : any[];
	export function head(array : any[]) : any;
	export function head(array : any[], n : number) : any[];
	export function take(array : any[]) : any;
	export function take(array : any[], n : number) : any[];

	export function initial(array : any[], n? : number) : any[];

	export function last(array : any[]) : any;
	export function last(array : any[], n? : number) : any[];

	export function rest(array : any[], index? : number) : any[];

	export function compact(array : any[]) : any[];

	export function flatten(array : any[], shallow?: bool) : any[];

	export function without(array : any[], ...values: any[]) : any[];
	export function without(array : any[], values: any[]) : any[];

	export function union(...arrays : any[][]) : any[];
	export function intersection(...arrays : any[][]) : any[];
	export function difference(array : any[], ...others : any[][]) : any[];
	export function uniq(array : any[], isSorted?: bool, iterator?: (item) => bool) : any[];
	export function zip(...arrays : any[][]) : any[][];
	
	export function object(list: any[][]) : any;
	export function object(list: any[], values: any[]) : any;

	export function indexOf(list: any[], value: any, isSorted?: bool) : number;
	export function lastIndexOf(list: any[], value: any, isSorted?: bool) : number;
	export function sortedIndex(list: any[], value: any, iterator?: (item) => any) : number;
	
	export function range(count: number) : number[];
	export function range(start : number, stop: number, step?: number) : number[];
}

// Function Functions
declare module "underscore" {
	export function bind(_function : Function, object : any, ...arguments : any[]) : () => any;
	export function bindAll(object : any, ... methodNames : any[]) : void;
	export function memoize(_function : Function, hashFunction : (value : any) => any) : any;
	export function delay(_function, _wait : number, ...arguments : any[]) : void;
	export function defer(_function, ...arguments: any[]) : void;
	export function throttle(_function, wait : number) : Function;
	export function debounce(_function, wait : number, immediate?) : Function;
	export function once(_function : () => any) : () => any;
	export function after(count, _function);
	export function wrap(_function : Function, wrapper : Function) : Function;
	export function compose(functions : Function[]) : Function;
}

// Object Functions
declare module "underscore" {
	// TO DO
}

// Utility Functions
declare module "underscore" {
	// TO DO
}

// Chaining Functions
declare module "underscore" {
	export interface Chain {
		value(): any;
	}

	export function chain(obj: any): Chain;

	function(obj: any) : Chain;
}