///<reference path='node.d.ts' />
///<reference path='superagent.d.ts' />

declare module "supertest" {
	import supertest = module('supertest');
	import superagent = module('superagent');

	export class TestRequest extends superagent.Request {
		serverAddress(app: any, path: string): TestRequest;
		expect(responseCode: number, cb?: (err: Error, res: superagent.Response) => void): TestRequest;
		expect(responseBody: string, cb?: (err: Error, res: superagent.Response) => void): TestRequest;
		expect(headerKey: string, headerValue: string, cb?: (err: Error, res: superagent.Response) => void): TestRequest;
		assert(res: any, cb?: (err: Error, res: superagent.Response) => void);
	}

	//export function agent(app: any): TestRequest;
	export function(app: any) : TestRequest;
	export function(url?: string, cb?: (res: superagent.Response) => void) : TestRequest;
}