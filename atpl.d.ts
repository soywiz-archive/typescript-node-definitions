module "atpl" {
	export function compile(templateString, options);
	export function __express(filename, options, callback);

	export function registerExtension(items: any);
	export function registerTags(items: any);
	export function registerFunctions(items: any);
	export function registerFilters(items: any);
	export function registerTests(items: any);
}