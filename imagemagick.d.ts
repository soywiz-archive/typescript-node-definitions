/// <reference path="node.d.ts" />

declare module "imagemagick" {
	import child_process = require("child_process");

	interface _identify {
		(path: string, callback: (err: Error, features: Features) => void): child_process.ChildProcess;
		(path: any[], callback: (err: Error, result: string) => void): child_process.ChildProcess;
		path: string;
	}

	export var identify: _identify;

	export function readMetadata(path: string, callback: (err: Error, result: any) => void): child_process.ChildProcess;

	interface _convert {
		(args: any, callback: (err, result) => void): child_process.ChildProcess;
		(args: any, timeout: number, callback: (err, result) => void): child_process.ChildProcess;
		path: string;
	}

	export var convert:_convert;

	export function resize(options : Options, callback: (err, result) => void): child_process.ChildProcess;
	export function crop(options : Options, callback: (err, result) => void): child_process.ChildProcess;
	export function resizeArgs(options: Options) : ResizeArgs;

	export interface Features {
		format?: string;
		width?: string;
		height?: string;
		depth?: string;
	}

	export interface Options {
		srcPath?: string;//: null,
		srcData?: string;//: null,
		srcFormat?: string;//: null,
		dstPath?: string;//: null,
		quality?: number;//: 0.8,
		format?: string;//: 'jpg',
		progressive?: boolean;//: false,
		colorspace?;//: null,
		width?: number;//: 0,
		height?: number;//: 0,
		strip?: boolean;//: true,
		filter?: string;//: 'Lagrange',
		sharpening?: number;//: 0.2,
		customArgs?: any[];//: [],
		timeout?: number;//: 0
	}

	export interface ResizeArgs {
		opt: Options;
		args: string[];
	}
}