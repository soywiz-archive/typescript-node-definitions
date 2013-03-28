// BDD
declare function describe(title?: string, cb?: () => void);

declare function it(title?: string, cb?: (done?:(err? : Error) => void) => void);

declare function before(title?: string, cb?: (done?:(err? : Error) => void) => void);

declare function after(title?: string, cb?: (done?:(err? : Error) => void) => void);

declare function beforeEach(title?: string, cb?: (done?:(err? : Error) => void) => void);

declare function afterEach(title?: string, cb?: (done?:(err? : Error) => void) => void);

declare var it : it;
declare interface it{
    skip(title?: string, cb?: (done?:(err? : Error) => void) => void);
    only(title?: string, cb?: (done?:(err? : Error) => void) => void);
}

declare var describe : describe;
declare interface describe{
    skip(title?: string, cb?: (done?:(err? : Error) => void) => void);
    only(title?: string, cb?: (done?:(err? : Error) => void) => void);
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
