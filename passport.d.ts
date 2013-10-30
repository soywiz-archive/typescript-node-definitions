declare module "passport" {

    function use(name:string, strategy);

    function unuse(name:string);

    function framework(fw:string);

    function initialize(options:Object);

    function session(options:Object);

    function authenticate(strategy:any, options?:Object, callback?:Function);

    function authorize(strategy, options, callback);

    function serializeUser(fn, done);

    function deserializeUser(fn, done);

    function transformAuthInfo(fn, done);
}
