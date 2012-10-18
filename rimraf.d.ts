// https://github.com/isaacs/rimraf

export module "rimraf" {
	export var EMFILE_MAX: number;
	export var BUSYTRIES_MAX: number;
	function(path: string, callback: (error: Error) => void);
	function sync(path: string);
}