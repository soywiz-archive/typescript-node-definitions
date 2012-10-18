// https://github.com/epeli/underscore.string

// types grabbed from: https://github.com/alvivi/typescript-underscore-string

/*
   Typescipt Underscore.String 2.3.0-0.1
   (c) 2012 Álvaro Vilanova Vidal
   Typescipt-Underscore-String may be freely distributed under the MIT license.
 */
declare module "underscore.string" {
    export function numberFormat (n : number, decimals? : number, decimalSeparator? : string, orderSeparator? : string) : string;
    export function levenshtein (str1 : string, str2 : string) : number;
    export function capitalize (str : string) : string;
    export function chop (str : string, step : number) : string[];
    export function clean (str : string) : string;
    export function chars (str : string) : string[];
    export function swapCase (str : string) : string;
    export function include (str : string, substr : string) : bool;
    export function count (str : string, substr : string) : number;
    export function escapeHTML (str : string) : string;
    export function unescapeHTML (str : string) : string;
    export function insert (str : string, index : number, substr : string) : string;
    export function isBlank (str : string) : bool;
    export function join (separator : string, ...strs : string[]) : string;
    export function lines (str : string) : string[];
	export function reverse (str : string) : string;
    export function splice (str : string, index : number, howmany : number, substr : string) : string;
    export function startsWith (str : string, starts : string) : bool;
    export function endsWith (str : string, ends : string) : bool;
    export function succ (str : string) : string;
    export function titleize (str : string) : string;
    export function camelize (str : string) : string;
    export function classify (str : string) : string;
    export function underscored (str : string) : string;
    export function dasherize (str : string) : string;
    export function humanize (str : string) : string;
    export function trim (str : string, characters? : string) : string;
    export function strip (str : string, characters? : string) : string;
    export function ltrim (str : string, characters? : string) : string;
    export function lstrip (str : string, characters? : string) : string;
    export function rtrim (str : string, characters? : string) : string;
    export function rstrip (str : string, characters? : string) : string;
    export function truncate (str : string, length : number, truncateString? : string) : string;
    export function prune (str : string, length : number, pruneString? : string) : string;
    export function words (str : string, delimiter : RegExp) : string[];
    export function sprintf (format : string, ...args : any[]) : string;
    export function pad (str : string, length : number, padStr? : string, type? : string) : string;
    export function lpad (str : string, length : number, padStr? : string) : string;
    export function rjust (str : string, length : number, padStr? : string) : string;
    export function rpad (str : string, length : number, padStr? : string) : string;
    export function ljust (str : string, length : number, padStr? : string) : string;
    export function lrpad (str : string, length : number, padStr? : string) : string;
    export function center (str : string, length : number, padStr? : string) : string;
    export function toNumber (str : string, decimals? : number) : string;
    export function strRight (str : string, pattern : string) : string;
    export function strRightBack (str : string, pattern : string) : string;
    export function strLeft (str : string, pattern : string) : string;
    export function strLeftBack (str : string, pattern : string) : string;
    export function stripTags (str : string) : string;
    export function toSentence (array : any[], delimiter? : string, lastDelimiter? : string) : string;
    export function toSentenceSerial (array : any[], delimiter? : string, lastDelimiter? : string) : string;
    export function repeat (str : string, count : number, separator? : string) : string;
    export function surround (str : string, wrap : string) : string;
    export function quote (str : string) : string;
    export function q (str : string) : string;
    export function slugify (str : string) : string;
}