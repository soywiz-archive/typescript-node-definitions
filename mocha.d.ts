// BDD
declare function describe(title: string, cb: () => void);
declare function it(title: string, cb: () => void);
declare function it(title: string, cb: (done:() => void) => void);
declare function before(title: string, cb: () => void);
declare function after(title: string, cb: () => void);
declare function beforeEach(title: string, cb: () => void);
declare function afterEach(title: string, cb: () => void);

// TDD
declare function suite(title: string, cb: () => void);
declare function test(title: string, cb: () => void);
declare function test(title: string, cb: (done:() => void) => void);
declare function setup(title: string, cb: () => void);
declare function teardown(title: string, cb: () => void);
