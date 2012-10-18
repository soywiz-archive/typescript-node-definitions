// https://github.com/isaacs/node-semver

declare module "semver" {
	export function valid(v: string): string;
	export function inc(v: string, release: string): string;
	export function clean(v: string): string;
	export function gt(v1: string, v2: string): bool;
	export function gte(v1: string, v2: string): bool;
	export function lt(v1: string, v2: string): bool;
	export function lte(v1: string, v2: string): bool;
	export function eq(v1: string, v2: string): bool;
	export function neq(v1: string, v2: string): bool;
	export function cmp(v1: string, comparator: Function, v2: string): bool;
	export function compare(v1: string, v2: string): number;
	export function rcompare(v1: string, v2: string): number;
	export function validRange(range: string): string;
	export function satisfies(version: string, range: string): string;
	export function maxSatisfying(versions: string[], range: string): string;
}