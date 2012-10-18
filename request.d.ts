/// <reference path="node.d.ts" />
/// <reference path="form-data.d.ts" />

// https://github.com/mikeal/request

declare module "request" {
	import request = module('request');
	import stream = module('stream');
	import http = module('http');
	import FormData = module('form-data');

	export function(uri: string, callback: () => void): Request;
	export function(uri: string, options: Options, callback: () => void): Request;
	export function request(uri: string, options: Options, callback: () => void): Request;
	export var initParams;
	export function defaults(options, requester);
	export function forever(agentOptions, optionsArg);
	export function get(uri: string, options: Options, callback: () => void): Request;
	export function post(uri: string, options: Options, callback: () => void): Request;
	export function put(uri: string, options: Options, callback: () => void): Request;
	export function head(uri: string, options: Options, callback: () => void): Request;
	export function del(uri: string, options: Options, callback: () => void): Request;
	export function jar(): CookieJar;
	export function cookie(str: string): Cookie;
	
	interface Options {
		uri: string;
		callback: () => void;
		jar;
		form;
		oauth;
		aws;
		qs;
		json;
		multipart;
		ca;
		agentOptions;
		agentClass;
		forever;
		requestBodyStream;
		host;
		port;
	}

	interface Request {
		// _updateProtocol();
		getAgent(): http.Agent;
		//start();
		//abort();
		pipeDest(dest);
		setHeader(name: string, value: string, clobber?: bool): Request;
		setHeaders(headers: any): Request;
		qs(q: any, clobber?: bool): Request;
		form(form: any): FormData.FormData;
		multipart(multipart: { body: any; }[]): Request;
		json(val: any): Request;
		aws(opts, now): Request;
		oauth(oauth): Request;
		jar(jar): Request;
		pipe(dest: stream.WritableStream, opts: any): stream.WritableStream;
		write();
		end(chunk);
		pause();
		resume();
		destroy();
		toJSON(): string;
	}

	//stream.

	export interface CookieJar {
		add(cookie: Cookie): void;
		get(req): Cookie;
		cookieString(req): string;
	}

	export interface Cookie {
		constructor (str, req);
		str: string;
		expires: Date;
		path: string;
		[index: string]: { name; value; httpOnly; };
		toString(): string;
	}
}