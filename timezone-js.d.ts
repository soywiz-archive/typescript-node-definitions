 module "timezone-js" {
    export var timezone : TimezoneJs;
    
    export var Date: {
        new (timezone?: string): TimezoneJsDate;
        new (time: string, timezone?: string): TimezoneJsDate;
        new (year?: number, month?: number, day?: number, hour?: number, minute?: number, second?: string, timezone?: string): TimezoneJsDate;
    };

    interface TimezoneJsDate extends Date {
        setTimezone: (timezone: string) => void;
    };
     
    class TimezoneJs {
        zoneFileBasePath: string;
        loadingScheme: TimezoneJsLoadingScheme;
        loadingSchemes: TimezoneJsLoadingSchemes;

        transport(opts: TimezoneJsOptions): any;
        init(opts?: TimezoneJsOptions): any;
    };

    interface TimezoneJsOptions { 
        async?: bool; 
        success?: (data: string) => any;
        error?: (err: Error) => any;
        url?: string;
    };

    interface TimezoneJsLoadingScheme {
    };

    interface TimezoneJsLoadingSchemes {
        PRELOAD_ALL: TimezoneJsLoadingScheme;
        LAZY_LOAD: TimezoneJsLoadingScheme;
        MANUAL_LOAD: TimezoneJsLoadingScheme;
    };
 }