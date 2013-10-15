/// <reference path="node.d.ts" />

/*

How to use:

import express3 = module("express3");
var express = require('express');
var app:express3.Application = express();

*/

declare module "express3" {
    import stream = require("stream");
    import express3 = require("express3");
    import http = require("http")
    //declare function callHack(): app;

    //export var app: Application;

	//export function (): Application;

    interface Application extends Function {
        // Constructor
        (): Application;

        set(name: String, value:any):any;
        get(name: String):any;

        enable(name: String):void;
        disable(name: String):void;

        enabled(name: String):boolean;
        disabled(name: String):boolean;

        configure(callback: () => void):void;
        configure(env: String, callback: () => void):void;

        engine(ext: String, callback:(path:String, options: any, callback: any) => void):void;

        param(callback: (req: Request, res: Response, next, id) => void);
        param(name: String, callback: (req: Request, res: Response, next, id) => void);

        get(path:String, ...callbacks: Function[] );
        post(path: String, ...callbacks: Function[]);
        put(path: String, ...callbacks: Function[]);
        delete(path: String, ...callbacks: Function[]);
        head(path: String, ...callbacks: Function[]);
		options(path:String, ...callbacks: Function[]);
        all(path:String, ...callbacks: Function[] );

        get(path:RegExp, ...callbacks: Function[] );
        post(path: RegExp, ...callbacks: Function[]);
        put(path: RegExp, ...callbacks: Function[]);
        delete(path: RegExp, ...callbacks: Function[]);
        head(path: RegExp, ...callbacks: Function[]);
		options(path:RegExp, ...callbacks: Function[]);
        all(path:RegExp, ...callbacks: Function[] );

        locals: any;

        render(view: String, options: any, callback: (err, html) => void);

        routes: any;

        listen(port: number):void;

        router:(req: Request, res: Response, next?: Function) => void;

        // More:
        use(item: (req: Request, res: Response, next?: Function) => void): Application;

        // connect Middlewares:
        //static(path: String): (req: Request, res: Response, next?: Function) => void;
        //favicon(): (req: Request, res: Response, next?: Function) => void;
    }

    interface Request extends http.ServerRequest {
        params: any;
        query: any;
        body: any;
        files: any /*<RequestFileBody>*/;

        param(name: String): any;
        route: RequestRoute;
        cookies: any;
        signedCookies: any;
        get(name: String): any;
        
        accepts(type: String): void;
        accepts(type: String[]): void;
        accepted: RequestAccepted[];

        is(type: String): boolean;
        ip: String;
        ips: String[];
        path: String;
        host: String;
        fresh: boolean;
        stale: boolean;
        xhr: boolean;
        protocol: String;
        secure: boolean;
        subdomains: String[];
        acceptedLanguages: String[];
        acceptedCharsets: String[];
        acceptsCharset(charset: String): boolean;
        acceptsLanguage(lang: String): boolean;
    }

    interface RequestAccepted {
        value: String;
        quality: number;
        type: String;
        subtype: String;
    }

    interface RequestRoute {
        path: String;
        method: String;
        callbacks: Function[];
        keys: any;
        regexp: RegExp;
        params: any;
    }

    interface RequestFileBody {
        size?: number;
        path?: string;
        name?: string;
        type?: string;
        hash?: boolean;
        lastModifiedDate?: Date;
        _writeStream?: any;
        length?: number;
        filename?: string;
        mime?: string;
    }

    interface Response extends stream.WritableStream {
    	app: Application;

    	statusCode: number;

        status(code: number): Response;

        setHeader(key: string, value: any) : Response;
        
        set(field: Object): Response;
        set(field: String, value: String): Response;
        
        get(field: String): String;

        cookie(name: String, value: String, options?: ResponseCookieOptions): Response;
        clearCookie(name: String, options?: ResponseCookieOptions): Response;

        redirect(url: String): Response;
        redirect(status: number, url: String): Response;

        charset: String;

        send(body: any): Response;
        send(status: number, body?: any): Response;

        json(body: any): Response;
        json(status: number, body?: any): Response;

        jsonp(body: any): Response;
        jsonp(status: number, body?: any): Response;

        type(type: String): Response;

        format(object: Object): Response;

        attachment(filename?: String): Response;

        sendfile(path: String, options?: ResponseSendfileOptions, fn?: (err?) => void): Response;
        download(path: String, filename?: String, fn?: (err?) => void): Response;
        links(links: Object);

        locals: Object;

        render(view: String, callback: (err, html: String) => void);
        render(view: String, locals: Object, callback?: (err, html: String) => void);

        writeHead(code: number, options: any): void;
    }

    interface ResponseSendfileOptions {
        maxAge?: number;
        root?: string;
    }

    interface ResponseCookieOptions {
        domain?: String;
        path?: String;
        secure?: boolean;
        expires?: Date;
        maxAge?: number;
        httpOnly?: boolean;
        signed?: boolean;
    }
}

declare module "http" {
    import express3 = require("express3");

    export function createServer(app: any): Server;
}
