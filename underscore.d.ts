// Underscore 1.4.2

// http://underscorejs.org
// http://github.com/documentcloud/underscore

// Collections
declare module "underscore" {
	/**
	 * Iterates over a list of elements, yielding each in turn to an iterator function.
	 * The iterator is bound to the context object, if one is passed. Each invocation of
	 * iterator is called with three arguments: (element, index, list). If list is a
	 * JavaScript object, iterator's arguments will be (value, key, list). Delegates
	 * to the native forEach function if it exists.
	 */
	export function each<T>(list: T[], iterator: (item: T) => void, context?: any) : void;
	export function each<T>(list: T, iterator: (item: any, key: string) => void, context?: any) : void;

	export function forEach<T>(list: T[], iterator: (item: T) => void, context?: any) : void;
	export function forEach<T>(list: T, iterator: (item: any, key: any) => void, context?: any) : void;
	
	export function map<T1, T2>(list: T1[], iterator: (item: T1) => T2, context?: any): T2[];
	export function collect<T1, T2>(list: T1[], iterator: (item: T1) => T2, context?: any): T2[];
	
	export function reduce<T1, T2>(list: T1[], iterator: (memo: T2, num: T1) => T2, memo: T2, context?): T2;
	export function inject<T1, T2>(list: T1[], iterator: (memo: T2, num: T1) => T2, memo: T2, context?): T2;
	export function foldl<T1, T2>(list: T1[], iterator: (memo: T2, num: T1) => T2, memo: T2, context?): T2;

	
	export function reduceRight<T1, T2>(list: T1[], iterator: (memo: T2, num: T1) => T2, memo: T2, context?): T2;
	export function foldr<T1, T2>(list: T1[], iterator: (memo: T2, num: T1) => T2, memo: T2, context?): T2;
	
	/**
	 * Looks through each value in the list, returning the first one that passes a truth test(iterator).The function returns as soon as it finds an acceptable element, and doesn't traverse the entire list.
	 */
	export function find<T>(list: T[], iterator: (item: T) => boolean, context?): T;
	export function detect<T>(list: T[], iterator: (item: T) => boolean, context?): T;

	/**
	 * Looks through each value in the list, returning an array of all the values that pass a truth test (iterator). Delegates to the native filter method, if it exists.
	 */	
	export function filter<T>(list: T[], iterator: (item: T) => boolean, context?): T[];
	export function select<T>(list: T[], iterator: (item: T) => boolean, context?): T[];

	export function where(list : any[], properties : any) : any[];
	export function reject(list : any[], iterator : (item) => boolean, context?) : any[];
	
	export function all(list : any[], iterator : (item) => boolean, context?) : boolean;
	export function every(list : any[], iterator : (item) => boolean, context?) : boolean;

	export function any(list : any[], iterator : (item) => boolean, context?) : boolean;
	export function some(list : any[], iterator : (item) => boolean, context?) : boolean;

	export function contains(list : any[], value: any) : boolean;
	export function include(list : any[], value: any) : boolean;

	export function invoke(list : any[], methodName: string, ...arguments : any[]) : boolean;
	export function invoke(list : any[], method: Function, ...arguments : any[]) : boolean;

	export function pluck(list : any[], propertyName : string) : any[];
	export function max(list : any[], iterator : (item) => any, context?) : any;
	export function min(list : any[], iterator : (item) => any, context?) : any;
  
  export function sortBy<T>(list: T[], iterator: (item: T) => any, context?): T[];
  export function sortBy(list: any[], iterator: (item) => any, context?): any[];
	export function groupBy(list : any[], iterator : (item) => any) : any;
	export function countBy(list : any[], iterator : (item) => string) : any;

	export function shuffle(list : any[]) : any[];

	export function toArray(list : any) : any[];
	export function size(list : any) : number;

// Array Functions
	export function first<T>(array: T[]): T;
	export function first<T>(array: T[], n: number): T[];
	export function head<T>(array: T[]): T;
	export function head<T>(array: T[], n: number): T[];
	export function take<T>(array: T[]): T;
	export function take<T>(array: T[], n: number): T[];

	export function initial(array : any[], n? : number) : any[];

	export function last(array : any[]) : any;
	export function last(array : any[], n? : number) : any[];

	export function rest(array : any[], index? : number) : any[];

	export function compact(array : any[]) : any[];

	export function flatten(array : any[], shallow?: boolean) : any[];

	export function without(array : any[], ...values: any[]) : any[];
	export function without(array : any[], values: any[]) : any[];

	export function union(...arrays : any[][]) : any[];
	export function intersection(...arrays : any[][]) : any[];
	export function difference(array : any[], ...others : any[][]) : any[];
	export function uniq(array : any[], isSorted?: boolean, iterator?: (item) => boolean) : any[];
	export function zip(...arrays : any[][]) : any[][];
	
	export function object(list: any[][]) : any;
	export function object(list: any[], values: any[]) : any;

	export function indexOf(list: any[], value: any, isSorted?: boolean) : number;
	export function lastIndexOf(list: any[], value: any, isSorted?: boolean) : number;
	export function sortedIndex(list: any[], value: any, iterator?: (item) => any) : number;
	
	export function range(count: number) : number[];
	export function range(start : number, stop: number, step?: number) : number[];

// Function Functions
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

// Object Functions
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
	export function has(object : any, key: string) : boolean;
	export function isEqual(object : any, key: string) : boolean;
	export function isEmpty(object : any) : boolean;
	export function isElement(object : any) : boolean;
	export function isArray(object : any) : boolean;
	export function isObject(object : any) : boolean;
	export function isArguments(object : any) : boolean;
	export function isFunction(object : any) : boolean;
	export function isString(object : any) : boolean;
	export function isNumber(object : any) : boolean;
	export function isFinite(object : any) : boolean;
	export function isBoolean(object : any) : boolean;
	export function isDate(object : any) : boolean;
	export function isRegExp(object : any) : boolean;
	export function isNaN(object : any) : boolean;
	export function isNull(object : any) : boolean;
	export function isUndefined(object : any) : boolean;

// Utility Functions
	export function noConflict() : any;
	export function identity(value: any): any;
	export function times(n : number, iterator : (value : any) => void, context?);
	export function random(min: number, max: number): number;
	export function mixin(object: any) : void;
	export function uniqueId(prefix?: string) : string;
	export function escape(string: string) : string;
	export function result(object: any, property: any) : any;
	export function template(templateString: string, data?: any, settings?: any) : string;

// Chaining Functions
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
	
		find(iterator : (item) => boolean, context?)  : Chain;
		detect(iterator : (item) => boolean, context?) : Chain;
	
		filter(iterator : (item) => boolean, context?) : Chain;
		select(iterator : (item) => boolean, context?) : Chain;

		where(properties : any) : any[];
		reject(iterator : (item) => boolean, context?) : Chain;
	
		all(iterator : (item) => boolean, context?) : Chain;
		every(iterator : (item) => boolean, context?) : Chain;

		any(iterator : (item) => boolean, context?) : Chain;
		some(iterator : (item) => boolean, context?) : Chain;

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

		flatten(shallow?: boolean) : Chain;

		without(...values: any[]) : Chain;
		without(values: any[]) : Chain;

		union(...arrays : any[][]) : Chain;
		intersection(...arrays : any[][]) : Chain;
		difference(...others : any[][]) : Chain;
		uniq(isSorted?: boolean, iterator?: (item) => boolean) : Chain;
		zip(...arrays : any[][]) : Chain;
	
		object(values: any[]) : Chain;

		indexOf(value: any, isSorted?: boolean) : Chain;
		lastIndexOf(value: any, isSorted?: boolean) : Chain;
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

	//export function(obj: any) : any;
}