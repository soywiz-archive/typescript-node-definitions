// https://github.com/timrwood/moment
// 1.7.2

declare module "moment" {
	import moment = module("moment");

	class Duration {
		humanize(): string;

		asYears(): number;
		asMonths(): number;
		asDays(): number;
		asHours(): number;
		asMinutes(): number;
		asSeconds(): number;
		asMilliseconds(): number;

		years(): number;
		months(): number;
		days(): number;
		hours(): number;
		minutes(): number;
		seconds(): number;
		milliseconds(): number;
	}

	class Moment {
		add(type: string, count: number): Moment;
		add(info: any): Moment;

		subtract(type: string, count: number): Moment;
		subtract(info: any): Moment;

		year(value: number): Moment;
		month(value: number): Moment;
		day(value: number): Moment;
		date(value: number): Moment;
		hours(value: number): Moment;
		minutes(value: number): Moment;
		seconds(value: number): Moment;
		milliseconds(value: number): Moment;

		startOf(type: string): Moment;
		endOf(type: string): Moment;

		sod(type: string): Moment;
		eod(type: string): Moment;

		from(fromMoment: Moment, bool?: bool): Moment;
		fromNow(bool?: bool): Moment;

		local(): Moment;
		utc(): Moment;

		year(): number;
		month(): number;
		day(): number;
		date(): number;
		hours(): number;
		minutes(): number;
		seconds(): number;
		milliseconds(): number;

		isLeapYear(): bool;

		zone(): number;
		daysInMonth(): number;
		isDST(): bool;

		format(format?: string): string;

		//duration(): Duration;
		calendar(): string;

		diff(moment: Moment, string?: string, bool?: bool): number;

		toDate(): Date;
		valueOf(): number;
		unix(): number;

		humanizeDuration(number: number, string?: string, bool?: bool): string;

		lang(lang: string): Moment;
		lang(lang: bool): Moment;
		lang(): string;

		isValid(): bool;
	}

	export function(): Moment;
	export function(date: Date): Moment;
	export function(moment: Moment): Moment;
	export function(unixEpoch: number): Moment;
	export function(date: string): Moment;
	export function(date: string, format: string): Moment;
	export function(date: string, formats: string[]): Moment;
	export function(array: number[]): Moment;

	export function utc(): Moment;
	export function utc(date: Date): Moment;
	export function utc(moment: Moment): Moment;
	export function utc(unixEpoch: number): Moment;
	export function utc(date: string): Moment;
	export function utc(date: string, format: string): Moment;
	export function utc(date: string, formats: string[]): Moment;
	export function utc(array: number[]): Moment;

	export function isMoment(object?: any): bool;

	export function lang(): string;
	export function lang(lang: string): void;
	export function lang(lang: string, info: any): void;

	export var months: any;
	export var monthsShort: any;
	export var weekdays: any;
	export var weekdaysShort: any;
	export var weekdaysMin: any;
	export var longDateFormat: { LT: string; L: string; LL: string; LLL: string; LLLL: string; };
	export var relativeTime: { future; past; s; m; mm; h; hh; d; dd; M; MM; y; yy; };
	export var meridiem: Function;
	export var calendar: { lastDay; sameDay; nextDay; lastWeek; nextWeek; sameElse; }
	export var ordinal: Function;

	export function duration(count: number, type?: string): Duration;
	export function duration(info: any): Duration;

	export function unix(unix?: number): Moment;
}