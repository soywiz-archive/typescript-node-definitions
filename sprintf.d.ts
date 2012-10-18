// https://npmjs.org/package/sprintf

declare module "sprintf" {
	export function sprintf(fmt: string, ...args: any[]): string;
	export function vsprintf(fmt: string, args: any[]): string;
}