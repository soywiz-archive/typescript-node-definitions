module "nock" {
	export import nock = module('nock');

    function(host: string, options?: Options): Scope;
    function cleanAll(): void;
    var recorder: Recorder;

    class Scope {
        get(path: string, data?: string): Scope;
        post(path: string, data?: string): Scope;
        put(path: string, data?: string): Scope;
        head(path: string): Scope;
        delete(path: string, data?: string): Scope;
        intercept(path: string, verb: string, body?: string, options?: any);

        reply(responseCode: number, body?: string, headers?: any): Scope;
        reply(responseCode: number, callback: (uri: string, body:string) => string, headers?: any): Scope;
        replyWithFile(responseCode: number, fileName: string): Scope;

        defaultReplyHeaders(headers: any);
        matchHeader(name: string, value: string);
        
        filteringPath(regex: RegExp, replace: string): Scope;
        filteringPath(fn: (path:string) => string): Scope;
        filteringRequestBody(regex: RegExp, replace: string): Scope;
        filteringRequestBody(fn: (path:string) => string): Scope;

        persist(): Scope;
        log(out: () => void): Scope;

        done(): void;
        isDone(): bool;
        restore(): void;
    }
    
    class Recorder {
        rec(capture?: bool): void;
        play(): string[];
    }

    interface Options {
        allowUnmocked?: bool;
    }
}