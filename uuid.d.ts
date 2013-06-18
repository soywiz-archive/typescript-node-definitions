/// <reference path="node.d.ts" />

declare module "uuid" {
    function v1(options?: v1Options, buffer?: any, offset?: number);
    function v4(options?: v4Options, buffer?: any, offset?: number);
    function noConflict();
    function parse(id, buffer?: any, offset?: number);
    function unparse(buffer: any, offset?: number);


    interface v4Options {
        random?: number[];
        rng?: any;
    }

    interface v1Options {
        node: number[];
        clockseq: number;
        msecs: number;
        nsecs: number;
    }
}