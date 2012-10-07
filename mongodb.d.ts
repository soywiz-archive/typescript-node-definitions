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

        public collection(collectionName: string, callback: (err: any, collection: Collection) => void);
        public collection(collectionName: string, options: MongoCollectionOptions, callback: (err: any, collection: Collection) => void);    

        public collections(callback: (err: any, collections: Collection[]) => void);
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

        public connect(url: string, options: { uri_decode_auth?: bool; }, callback: (err, result) => void);

    }
    export class ObjectID {
        constructor(s: string);
    }

    export interface Collection {
        //constructor (db: Db, collectionName: string, pkFactory, options);

        insert(query: any, callback: (err: any, result: any) => void): void;
        insert(query: any, options: { safe?: any; continueOnError?: bool; keepGoing?: bool; serializeFunctions?: bool; }, callback: (err: any, result: any) => void): void;

        remove(selector, callback?: (err: any, result: any) => void);
        remove(selector, options: { safe?: any; single?: bool; }, callback?: (err: any, result: any) => void);

        rename(newName: String, callback?: (err, result) => void);

        save(doc: any, callback : (err, result) => void);
        save(doc: any, options: { safe: any; }, callback : (err, result) => void);

        update(selector: any, document: any, callback: (err: any, result: any) => void): void;
        update(selector: any, document: any, options: { safe; upsert; multi; serializeFunctions; }, callback: (err: any, result: any) => void): void;

        distinct(key: string, query: Object, callback: (err, result) => void);
        distinct(key: string, query: Object, options: { readPreferences; }, callback: (err, result) => void);

        count(query: Object, callback: (err, result) => void);
        count(query: Object, options: { readPreferences; }, callback: (err, result) => void);

        drop(callback?: (err, result) => void);

        findAndModify(query: Object, sort: any[], doc: Object, callback: (err, result) => void);
        findAndModify(query: Object, sort: any[], doc: Object, options: { safe: any; remove: bool; upsert: bool; new: bool; }, callback: (err, result) => void);

        findAndRemove(query : Object, sort? : any[], callback?: (err, result) => void);
        findAndRemove(query : Object, sort? : any[], options?: { safe; }, callback?: (err, result) => void);

        find(callback?: (err: any, result: Cursor) => void): Cursor;
        find(selector: any, callback?: (err: any, result: Cursor) => void): Cursor;
        find(selector: any, fields: any, callback?: (err: any, result: Cursor) => void): Cursor;
        find(selector: any, options: CollectionFindOptions, callback?: (err: any, result: Cursor) => void): Cursor;
        find(selector: any, fields: any, options: CollectionFindOptions, callback?: (err: any, result: Cursor) => void): Cursor;
        find(selector: any, fields: any, skip: number, limit: number, callback?: (err: any, result: Cursor) => void): Cursor;
        find(selector: any, fields: any, skip: number, limit: number, timeout: number, callback?: (err: any, result: Cursor) => void): Cursor;

        findOne(callback?: (err: any, result: Cursor) => void): Cursor;
        findOne(selector: any, callback?: (err: any, result: Cursor) => void): Cursor;
        findOne(selector: any, fields: any, callback?: (err: any, result: Cursor) => void): Cursor;
        findOne(selector: any, options: CollectionFindOptions, callback?: (err: any, result: Cursor) => void): Cursor;
        findOne(selector: any, fields: any, options: CollectionFindOptions, callback?: (err: any, result: Cursor) => void): Cursor;
        findOne(selector: any, fields: any, skip: number, limit: number, callback?: (err: any, result: Cursor) => void): Cursor;
        findOne(selector: any, fields: any, skip: number, limit: number, timeout: number, callback?: (err: any, result: Cursor) => void): Cursor;

        createIndex(fieldOrSpec, options, callback);
        ensureIndex(fieldOrSpec, options, callback);
        indexInformation(options, callback);
        dropIndex(name, callback);
        dropAllIndexes(callback);
        // dropIndexes = dropAllIndexes

        reIndex(callback);
        mapReduce(map, reduce, options, callback);
        group(keys, condition, initial, reduce, finalize, command, options, callback);
        options(callback);
        isCapped(callback);
        indexExists(indexes, callback);
        geoNear(x, y, options, callback);
        geoHaystackSearch(x, y, options, callback);
        indexes(callback);
        aggregate(pipeline, options, callback);
        stats(options, callback);

        hint;
    }

    export interface Cursor {
        toArray(callback: (err: any, results: any[]) => void);
    }

    export interface CollectionFindOptions {
        limit;
        sort;
        fields;
        skip;
        hint;
        explain;
        snapshot;
        timeout;
        tailtable;
        tailableRetryInterval;
        numberOfRetries;
        awaitdata;
        exhaust;
        batchSize;
        returnKey;
        maxScan;
        min;
        max;
        showDiskLoc;
        comment;
        raw;
        readPreferences;
        partial;
    }

    export interface MongoCollectionOptions {
        safe?: any;
        serializeFunctions?: any;
        raw?: bool;
        pkFactory?: any;
        readPreferences?: string;
    }
}
