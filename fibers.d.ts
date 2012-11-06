declare module "fibers" {
	import fibers = module("fibers");
	
	export class Fiber {
		static yield(value:any): any;
		public run();
	}

	export var poolSize: number;
	export var fibersCreated: number;
	export var current: Fiber;
	export function yield(value:any): any;
	export function(callback: () => void): Fiber;
}