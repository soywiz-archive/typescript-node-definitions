declare module "memory-cache" {
    export function put(key: any, value: any, time?: number, timeoutCallback?: (key: any, value: any) => void) : void;
    export function get(key: any): any;
    export function del(key: any): void;
    export function clear(): void;

    export function size(): number;
    export function memsize(): number;

    export function debug(bool: boolean): void;
    export function hits(): number;
    export function misses(): number;
}
