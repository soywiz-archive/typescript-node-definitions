// BDD
declare var describe : IMochaDescribeWithSkip;

declare var it: IMochaTestWithSkip;

declare var before : IMochaTest;

declare var after : IMochaTest;

declare var beforeEach : IMochaTest;

declare var afterEach : IMochaTest;

interface IMochaDescribe {
    (title: string, cb?: () => void) : void;
}

interface IMochaDescribeWithSkip extends IMochaDescribe {
    skip : IMochaDescribe;
    only : IMochaDescribe;
}

interface IMochaTest {
    (cb?: () => void) : void;
    (cb?: (done:(err? : Error) => void) => void) : void;
    (title: string, cb?: () => void) : void;
    (title: string, cb?: (done:(err? : Error) => void) => void) : void;
}

interface IMochaTestWithSkip extends IMochaTest {
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
