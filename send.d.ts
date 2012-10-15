///<reference path='node.d.ts' />
module "send" {
	import send = module("send");

	export function (req : any, path : string, options? : Options): SendStream;

	export interface Options {
		start?: number;
		end?: number;
	}

	export interface SendStream {
		req : any;
		path : string;
		options : Options;

		//constructor(req, path, options);
		hidden(set): SendStream;
		index(value: string): SendStream;
		root(value: string): SendStream;
		from(value: string): SendStream;
		maxage(ms: number): SendStream;
		//error(status, err) : SendStream;
		//isMalicious() : SendStream;
		//hasTrailingSlash() : SendStream;
		//hasLeadingDot() : SendStream;
		//isConditionalGET() : SendStream;
		//removeContentHeaderFields() : SendStream;
		//notModified() : SendStream;
		//isCachable() : SendStream;
		//onStatError(err) : SendStream;
		//isFresh() : SendStream;
		//redirect() : SendStream;
		pipe(res);
		send(path, stat);
		//stream(path, options);
		//type(path);
		//setHeader(stat);
	}


}