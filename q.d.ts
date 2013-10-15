declare module "q" {
	export class deferred {
		promise : makePromise;
		public resolve(resolvedValue) : any;
		public reject(exception) : any;
		public notify() : void;
	}

	export function defer() : deferred;

	export class makePromise {
		constructor (descriptor, fallback, valueOf, exception);

		public then(fulfilled? , rejected? , progressed? ) : makePromise;

		public isResolved() : boolean;
		public isFulfilled() : boolean;
		public isRejected() : boolean;
        public when(fulfilled?, rejected?, progressed?) : makePromise;
		public spread(fulfilled?, rejected?) : makePromise;
		public send(op) : makePromise;
        public get() : makePromise;
		public put() : makePromise;
		public del() : makePromise;
        public post() : makePromise;
		public invoke(name/*, args...*/);
        public keys();
        public apply();
		public call();
		public bind();
        public fapply();
		public fcall();
		public fbind();
        public all();
		public allResolved();
        public view();
		public viewInfo();
        public timeout();
		public delay();
        public catch();
		public finally();
		public fail();
		public fin();
		public progress();
		public end();
        public ncall();
		public napply();
		public nbind();
        public npost();
		public ninvoke();
        public nend();
	}

	export function when(promise : makePromise, fulfilled, rejected, progressed) : makePromise;
}