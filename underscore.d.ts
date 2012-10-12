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
	export function memoize(_function : Function, hashFunction? : (value : any) => any) : any;
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
	export function keys(object: any) : any[];
	export function values(object: any) : any[];
	export function pairs(object: any) : any[];
	export function invert(object: any) : any;

	export function functions(object: any) : string[];
	export function methods(object: any) : string[];

	export function extend(destination : any,  ...sources: any[]) : any;
	export function pick(object : any,  ...keys: string[]) : any;
	export function omit(object : any,  ...keys: string[]) : any;

	export function defaults(object : any,  ...defaults: any[]) : any;
	export function clone(object : any) : any;

	export function tap(object : any, interceptor : (object: any) => void) : any;
	export function has(object : any, key: string) : bool;
	export function isEqual(object : any, key: string) : bool;
	export function isEmpty(object : any) : bool;
	export function isElement(object : any) : bool;
	export function isArray(object : any) : bool;
	export function isObject(object : any) : bool;
	export function isArguments(object : any) : bool;
	export function isFunction(object : any) : bool;
	export function isString(object : any) : bool;
	export function isNumber(object : any) : bool;
	export function isFinite(object : any) : bool;
	export function isBoolean(object : any) : bool;
	export function isDate(object : any) : bool;
	export function isRegExp(object : any) : bool;
	export function isNaN(object : any) : bool;
	export function isNull(object : any) : bool;
	export function isUndefined(object : any) : bool;
}

// Utility Functions
declare module "underscore" {
	export function noConflict() : any;
	export function identity(value: any): any;
	export function times(n : number, iterator : (value : any) => void, context?);
	export function random(min: number, max: number): number;
	export function mixin(object: any) : void;
	export function uniqueId(prefix?: string) : string;
	export function escape(string: string) : string;
	export function result(object: any, property: any) : any;
	export function template(templateString: string, data?: any, settings?: any) : string;
}

// Chaining Functions
declare module "underscore" {
	export interface Chain {
		// Collection
		each(iterator: (item: any) => void, context?: any) : Chain;
		each(iterator: (item: any, key: any) => void, context?: any) : Chain;

		forEach(iterator: (item: any) => void, context?: any) : Chain;
		forEach(iterator: (item: any, key: any) => void, context?: any) : Chain;
	
		map(iterator, context?) : Chain;
		collect(iterator, context?) : Chain;
	
		reduce(iterator, memo, context?) : Chain;
		inject(iterator, memo, context?) : Chain;
		foldl(iterator, memo, context?) : Chain;

	
		reduceRight(iterator, memo, context?) : Chain;
		foldr(iterator, memo, context?) : Chain;
	
		find(iterator : (item) => bool, context?)  : Chain;
		detect(iterator : (item) => bool, context?) : Chain;
	
		filter(iterator : (item) => bool, context?) : Chain;
		select(iterator : (item) => bool, context?) : Chain;

		where(properties : any) : any[];
		reject(iterator : (item) => bool, context?) : Chain;
	
		all(iterator : (item) => bool, context?) : Chain;
		every(iterator : (item) => bool, context?) : Chain;

		any(iterator : (item) => bool, context?) : Chain;
		some(iterator : (item) => bool, context?) : Chain;

		contains(value: any) : Chain;
		include(value: any) : Chain;

		invoke(methodName: string, ...arguments : any[]) : Chain;
		invoke(method: Function, ...arguments : any[]) : Chain;

		pluck(propertyName : string) : Chain;
		max(iterator : (item) => any, context?) : Chain;
		min(iterator : (item) => any, context?) : Chain;
	
		sortBy(iterator : (item) => any, context?) : Chain;
		groupBy(iterator : (item) => any) : Chain;
		countBy(iterator : (item) => string) : Chain;

		shuffle() : Chain;

		toArray() : Chain;
		size() : Chain;

		// Array
		first(n? : number) : Chain;
		head(n? : number) : Chain;
		take(n? : number) : Chain;

		initial(n? : number) : Chain;

		last(n? : number) : Chain;

		rest(index? : number) : Chain;

		compact() : Chain;

		flatten(shallow?: bool) : Chain;

		without(...values: any[]) : Chain;
		without(values: any[]) : Chain;

		union(...arrays : any[][]) : Chain;
		intersection(...arrays : any[][]) : Chain;
		difference(...others : any[][]) : Chain;
		uniq(isSorted?: bool, iterator?: (item) => bool) : Chain;
		zip(...arrays : any[][]) : Chain;
	
		object(values: any[]) : Chain;

		indexOf(value: any, isSorted?: bool) : Chain;
		lastIndexOf(value: any, isSorted?: bool) : Chain;
		sortedIndex(value: any, iterator?: (item) => any) : Chain;
	
		range() : Chain;
		range(stop: number, step?: number) : Chain;

		// Functions
		bind(object : any, ...arguments : any[]) : () => Chain;
		bindAll(... methodNames : any[]) : Chain;
		memoize(hashFunction : (value : any) => any) : Chain;
		delay(_wait : number, ...arguments : any[]) : Chain;
		defer(...arguments: any[]) : Chain;
		throttle(wait : number) : Chain;
		debounce(wait : number, immediate?) : Chain;
		once() : Chain;
		after(_function) : Chain;
		wrap(wrapper : Function) : Chain;
		compose() : Chain;

		// Object
		keys() : Chain;
		values() : Chain;
		pairs() : Chain;
		invert() : Chain;

		functions() : Chain;
		methods() : Chain;

		extend(...sources: any[]) : Chain;
		pick(...keys: string[]) : Chain;
		omit(...keys: string[]) : Chain;

		defaults(...defaults: any[]) : Chain;
		clone() : Chain;

		tap(interceptor : (object: any) => void) : Chain;
		has(key: string) : Chain;
		isEqual(key: string) : Chain;
		isEmpty() : Chain;
		isElement() : Chain;
		isArray() : Chain;
		isObject() : Chain;
		isArguments() : Chain;
		isFunction() : Chain;
		isString() : Chain;
		isNumber() : Chain;
		isFinite() : Chain;
		isBoolean() : Chain;
		isDate() : Chain;
		isRegExp() : Chain;
		isNaN() : Chain;
		isNull() : Chain;
		isUndefined() : Chain;

		// Chaining
		value(): any;
	}

	export function chain(obj: any): Chain;

	function(obj: any) : any;
}