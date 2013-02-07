/// <reference path="node.d.ts" />

// https://github.com/mikeal/watch

declare module "watch" {
	import fs = module("fs");

	interface Monitor extends EventEmitter {
		// event: created
		// event: removed
		// event: changed

		// export function onCreated(callback, function(f, stat: fs.Stats) { });
		// export function onChanged(callback, function(f, curr: fs.Stats, prev: fs.Stats) { });
		// export function onRemoved(callback, function(f, stat: fs.Stats) { });
	}

	interface Options {
		ignoreDotFiles?: bool;
		filter?: any;
	}

	export function watchTree(root: string, callback: (f, curr : fs.Stats, prev : fs.Stats) => void);
	export function watchTree(root: string, options: Options, callback: (f, curr : fs.Stats, prev : fs.Stats) => void);

	export function createMonitor(root: string, callback: (monitor: Monitor) => void);
	export function createMonitor(root: string, options: Options, callback: (monitor: Monitor) => void);
}