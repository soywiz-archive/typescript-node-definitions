///<reference path='node.d.ts' />

declare module "superagent" {
	import superagent = module('superagent');

	export interface Response {
		text: string;
		header: any;
		headers: any;
		type: string;
		status: number;
		statusCode: number;
		statusType: number;
		info: any;
		ok: bool;
		redirect: bool;
		req: any;
		res: any;
	}

	export class Request {
		auth(user: string, name: string): Request;
		redirects(count: number): Request;
		type(type: string): Request;
		get(url: string): Request;
		del(url: string): Request;
		head(url: string): Request;
		post(url: string): Request;
		query(object: any): Request;
		send(object: any): Request;
		set(key: string, value: any): Request;
		field(key: string, value: any): Request;
		attach(key: string, file: any): Request;
		end(callback: (err: Error, res: Response) => void): Request;
	}

	export interface Agent {
	}

	export interface Part {
	}

	export function agent(): Agent;
	export function get (url: string): Request;
	export function post(url: string): Request;
	export function put();
	export function head();
	export function del();
	export function options();
	export function trace();
	export function copy();
	export function lock();
	export function mkcol();
	export function move();
	export function propfind();
	export function proppatch();
	export function unlock();
	export function report();
	export function mkactivity();
	export function checkout();
	export function merge();
	//export function 'm-search'();
	export function notify();
	export function subscribe();
	export function unsubscribe();
	export function patch();
	export function(url?: string, cb?: (err: Error, res: Response) => void): Request;
}