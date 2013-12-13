// https://github.com/timrwood/moment
// 1.7.2

declare module "moment" {
	import moment = require("moment");

	module _moment
	{
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

			from(fromMoment: Moment, bool?: boolean): Moment;
			fromNow(bool?: boolean): Moment;

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

			isLeapYear(): boolean;

			zone(): number;
			daysInMonth(): number;
			isDST(): boolean;

			format(format?: string): string;

			//duration(): Duration;
			calendar(): string;

			diff(moment: Moment, string?: string, bool?: boolean): number;

			toDate(): Date;
			valueOf(): number;
			unix(): number;

			humanizeDuration(number: number, string?: string, bool?: boolean): string;

			lang(lang: string): Moment;
			lang(lang: boolean): Moment;
			lang(): string;

			isValid(): boolean;
		}
	}

	interface _moment
	{
		utc(): _moment.Moment;
		utc(date: Date): _moment.Moment;
		utc(moment: _moment.Moment): _moment.Moment;
		utc(unixEpoch: number): _moment.Moment;
		utc(date: string): _moment.Moment;
		utc(date: string, format: string): _moment.Moment;
		utc(date: string, formats: string[]): _moment.Moment;
		utc(array: number[]): _moment.Moment;

		isMoment(object?: any): boolean;

		lang(): string;
		lang(lang: string): void;
		lang(lang: string, info: any): void;

		months: any;
		monthsShort: any;
		weekdays: any;
		weekdaysShort: any;
		weekdaysMin: any;
		longDateFormat: { LT: string; L: string; LL: string; LLL: string; LLLL: string; };
		relativeTime: { future; past; s; m; mm; h; hh; d; dd; M; MM; y; yy; };
		meridiem: Function;
		calendar: { lastDay; sameDay; nextDay; lastWeek; nextWeek; sameElse; }
		ordinal: Function;

		duration(count: number, type?: string): _moment.Duration;
		duration(info: any): _moment.Duration;

		unix(unix?: number): _moment.Moment;

		(): _moment.Moment;
		(date: Date): _moment.Moment;
		(moment: _moment.Moment): _moment.Moment;
		(unixEpoch: number): _moment.Moment;
		(date: string): _moment.Moment;
		(date: string, format: string): _moment.Moment;
		(date: string, formats: string[]): _moment.Moment;
		(array: number[]): _moment.Moment;
	}

	export = _moment;
}