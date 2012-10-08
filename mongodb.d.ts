///<reference path='node.d.ts' />

declare module "mongodb" {
    export class Server {
        constructor(host: string, port: number, opts?: ServerOptions);
    }
    export class Db {
        constructor(databaseName: string, serverConfig: Server, db_options?:DBOptions);
        public open(callback: (err,result)=>void);
		public close(forceClose?:bool,callback?: (err,result)=>void);
        public collection(name: string, callback: (err: any, collection: MongoCollection) => void);    
		public dropDatabase(callback: (err,result)=>void);
		public createCollection(name: string, options: CollectionCreateOptions, callback: (err,result)=>void);
    }
    export class ObjectID {
        constructor(s: string);
    }
}

interface MongoDb {
    
}

interface SocketOptions {
	//= set seconds before connection times out default:0
	timeout: number;
	//= Disables the Nagle algorithm default:true
	noDelay: bool;
	//= Set if keepAlive is used default:0 , which means no keepAlive, set higher than 0 for keepAlive
	keepAlive: number;
	//= ‘ascii’|’utf8’|’base64’ default:null
	encoding?: string;
}

interface ServerOptions {
	// - to reconnect automatically, default:false
	auto_reconnect: bool;
	// - specify the number of connections in the pool default:1
	poolSize: number;
	// - a collection of pr socket settings
	socketOptions: any;
}

interface PKFactory {
	counter: number;
	createPk: () => number;
}

interface DBOptions {
	//- if true, use native BSON parser
	native_parser: bool;
	//- sets strict mode , if true then existing collections can’t be “recreated” etc.
	strict: bool;
	//- custom primary key factory to generate _id values (see Custom primary keys).
	pk: PKFactory;
	//- generation of objectid is delegated to the mongodb server instead of the driver. default is false
	forceServerObjectId: bool;
	//- specify the number of milliseconds between connection attempts default:5000
	retryMiliSeconds: number;
	//- specify the number of retries for connection attempts default:3
	numberOfRetries: number;
	//- enable/disable reaper (true/false) default:false
	reaper: bool;
	//- specify the number of milliseconds between each reaper attempt default:10000
	reaperInterval: number;
	//- specify the number of milliseconds for timing out callbacks that don’t return default:30000
	reaperTimeout: number;
	//- driver expects Buffer raw bson document, default:false
	raw: bool;
}

interface CollectionCreateOptions {
	// {true | {w:n, wtimeout:n} | {fsync:true}, default:false}, executes with a getLastError command returning the results of the command on MongoDB.
	safe: bool;
	// {Boolean, default:false}, serialize functions on the document.
	serializeFunctions: bool;
	// {Boolean, default:false}, perform all operations using raw bson objects.
	raw: bool; 
	// object overriding the basic ObjectID primary key generation.
	pkFactory: PKFactory;
	// {Boolean, default:false}, create a capped collection.
	capped: bool;
	// {Number}, the size of the capped collection in bytes. 
	size: number;
	// {Number}, the maximum number of documents in the capped collection.
	max: number;
	// {Boolean, default:false}, create an index on the _id field of the document, not created automatically on capped collections.
	autoIndexId: bool;
	// {String}, the prefered read preference (ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST).
	readPreference: string; 
}

interface MongoCollection {
    find(query: any): MongoCursor;
    find(query: any, callback?: (err: any, result: any) => void): MongoCursor;
    find(query: any, select: any, callback?: (err: any, result: any) => void): MongoCursor;
    findOne(query: any, callback: (err: any, result: any) => void): void;
    update(query: any, updates: any, callback: (err: any, result: any) => void): void;
    insert(query: any, callback: (err: any, result: any) => void): void;
}

interface MongoCursor {
    toArray(callback: (err: any, results: any[]) => void);
}
