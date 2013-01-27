module "winston" {
    function log(level: string, message: string, metadata?: any);
    function info(message: string, metadata?: any);
    function warn(message: string, metadata?: any);
    function error(message: string, metadata?: any);

    function add(transport: Transport, options: any);
    function remove(transport: Transport);

    function profile(name: string);
    
    function query(options: any, done: (err: any, results: any) => void);
    
    function stream(options: any): any;
    
    function handleExceptions(transport: Transport);
    
    interface Transport {
    }
    interface Transports {
        File: Transport;
        Console: Transport;
        Loggly: Transport;
    }
    export var transports: Transports;
    export var exitOnError: bool;
}