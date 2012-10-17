// https://github.com/Marak/colors.js

// import _colors = module("colors");
// var colors = require('colors');

module "colors" {
	export function setTheme(theme: any);
	export function addSequencer(name: string, callback: Function);

	// none, browser, console
	export var mode: string;
}

declare interface String {
	bold: String;
	italic: String;
	underline: String;
	inverse: String;
	white: String;
	grey: String;
	black: String;
	blue: String;
	cyan: String;
	green: String;
	magenta: String;
	red: String;
	yellow: String;
}