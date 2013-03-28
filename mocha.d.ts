// BDD
declare var describe : IMochaDescribe;

declare var it: IMochaTest;

declare var before : IMochaSyncAsync;

declare var after : IMochaSyncAsync;

declare var beforeEach : IMochaSyncAsync;

declare var afterEach : IMochaSyncAsync;

declare interface IMochaDescribe {
    (title: string, cb?: () => void) : void;
    skip : IMochaDescribe;
    only : IMochaDescribe;
}
declare interface IMochaSyncAsync {
    (cb: () => void) : void;
    (cb: (done:(err? : Error) => void) => void) : void;
    (title: string, cb?: () => void) : void;
    (title: string, cb: (done:(err? : Error) => void) => void) : void;
}

declare interface IMochaTest extends IMochaSyncAsync {
    skip : IMochaTest;
    only : IMochaTest;
}



// TDD
declare function suite(title: string, cb: () => void);
declare function test(title: string, cb: () => void);
declare function test(title: string, cb: (done:() => void) => void);
declare function setup(title: string, cb: () => void);
declare function teardown(title: string, cb: () => void);

declare function suite(cb: () => void);
declare function test(cb: () => void);
declare function test(cb: (done:() => void) => void);
declare function setup(cb: () => void);
declare function teardown(cb: () => void);
