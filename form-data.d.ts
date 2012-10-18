// https://github.com/felixge/node-form-data

declare module "form-data" {
	export class FormData {
		append(key: string, value: any): FormData;
		getHeaders(): any;
	}
}