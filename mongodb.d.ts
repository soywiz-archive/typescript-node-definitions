///<reference path='node.d.ts' />

declare module "mongodb" {
    export class Server {
        constructor(host: string, port: number, opts?: any, moreopts?: any);
    }
    export class Db {
        constructor(databaseName: string, serverConfig: Server, options?: any);

        public db(dbName: string): Db;

        public open(callback: () => void);
        public close(forceClose?: bool, callback?: (err: any, result: any) => void);
        public admin(callback: (err, result) => void): any;
        public collectionsInfo(collectionName: string, callback?: (err, result) => void);
        public collectionNames(collectionName: string, options: any, callback?: (err, result) => void);

        public collection(collectionName: string, callback: (err: any, collection: MongoCollection) => void);
        public collection(collectionName: string, options: MongoCollectionOptions, callback: (err: any, collection: MongoCollection) => void);    

        public collections(callback: (err: any, collections: MongoCollection[]) => void);
        public eval(code: any, parameters: any[], options?: any, callback?: (err, result) => void);
        //public dereference(dbRef: DbRef, callback: (err, result) => void);
        
        public logout(options: any, callback?: (err, result) => void);
        public logout(callback: (err, result) => void);

        public authenticate(userName: string, password: string, callback?: (err, result) => void);
        public authenticate(userName: string, password: string, options: any, callback?: (err, result) => void);

        public addUser(username: string, password: string, callback?: (err, result) => void);
        public addUser(username: string, password: string, options: any, callback?: (err, result) => void);

        public removeUser(username: string, callback?: (err, result) => void);
        public removeUser(username: string, options: any, callback?: (err, result) => void);

        public createCollection(collectionName: string, callback?: (err, result) => void);
        public createCollection(collectionName: string, options: any, callback?: (err, result) => void);

        public command(selector: any, callback?: (err, result) => void);
        public command(selector: any, options: any, callback?: (err, result) => void);

        public dropCollection(collectionName: string, callback?: (err, result) => void);
        public renameCollection(fromCollection: string, toCollection: string, callback?: (err, result) => void);

        public lastError(options, connectionOptions, callback: (err, result) => void);
        public previousError(options, callback: (err, result) => void);

        // error = lastError
        // lastStatus = lastError

        public executeDbCommand(command_hash, callback? : (err, result) => void);
        public executeDbCommand(command_hash, options, callback? : (err, result) => void);

        public executeDbAdminCommand(command_hash, callback? : (err, result) => void);
        public executeDbAdminCommand(command_hash, options, callback? : (err, result) => void);

        public resetErrorHistory(callback?: (err, result) => void);
        public resetErrorHistory(options, callback?: (err, result) => void);

        public createIndex(collectionName, fieldOrSpec, options, callback);
        public ensureIndex(collectionName, fieldOrSpec, options, callback);

        public cursorInfo(options, callback);

        public dropIndex(collectionName, indexName, callback);
        public reIndex(collectionName, callback);
        public indexInformation(collectionName, options, callback);
        public dropDatabase(callback: (err, result) => void);

        public stats(options, callback);
        public _registerHandler(db_command, raw, connection, exhaust, callback);
        public _reRegisterHandler(newId, object, callback);
        public _callHandler(id, document, err);
        public _hasHandler(id);
        public _removeHandler(id);
        public _findHandler(id): { id: string; callback: Function; };
        public __executeQueryCommand(self, db_command, options, callback);

        public DEFAULT_URL: string;

        public connect(url: string, options: { uri_decode_auth: bool; }, callback: (err, result) => void);

    }
    export class ObjectID {
        constructor(s: string);
    }
}

interface MongoCollectionOptions {
    safe?: any;
    serializeFunctions?: any;
    raw?: bool;
    pkFactory?: any;
    readPreferences?: string;
}

interface MongoDb {
    
}

interface MongoCollection {
    find(query: any): MongoCursor;
    find(query: any, callback?: (err: any, result: MongoCursor) => void): MongoCursor;
    find(query: any, select: any, callback?: (err: any, result: MongoCursor) => void): MongoCursor;
    findOne(query: any, callback: (err: any, result: any) => void): void;
    update(query: any, updates: any, callback: (err: any, result: any) => void): void;
    insert(query: any, callback: (err: any, result: any) => void): void;
}

interface MongoCursor {
    toArray(callback: (err: any, results: any[]) => void);
}
