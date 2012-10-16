declare module "swig" {
	export function init(options: Options): void;
	export function compileFile(filepath: string): any;
	export function compile(source: string, options?: Options): any;

	export interface Options {
		allowErrors?: bool;//: false,
        autoescape?: bool;//: true,
        cache?: bool;//: true,
        encoding?: string;//: 'utf8',
        filters?: any;//: filters,
        root?: string;//: '/',
        tags?: any;//: tags,
        extensions?: any;//: {},
        tzOffset?: number;//: 0
	}
}