declare module "connect" {
	export class Store {
		get(sid: string, cb: (err, data) => void ): void;
		set(sid: string, sess: any, cb: (err, data) => void ): void;
		destroy(sid: string, cb: (err, data) => void ): void;
		length(cb: (err, data) => void ): void;
		clear(cb: (err, data) => void ): void;
	}
}

declare module "express3" {
	export interface Request {
		session: any;
	}
}