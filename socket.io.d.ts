/*
Example:

/// SERVER

import sio = module("socket.io");
import http = module("http");

var httpServer = http.createServer(app);

var io = sio.listen(httpServer);
io.sockets.on('connection', function (socket: sio.Socket) {
	socket.emit('news', { hello: 'world' });
	socket.on('my other event', function (data) {
		console.log(data);
	});
});

httpServer.listen(app.get('port'), function () {

/// CLIENT

<script src="/socket.io/socket.io.js"></script>
<script>
  var socket = io.connect('http://localhost');
  socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
  });
</script>
{% endblock %}

*/

/// <reference path="node.d.ts" />

declare module "socket.io" {
	export var version : string;
	export var protocol: number;
	export var clientVersion : string;
	export function listen(server : any, options? : ManagerOptions, fn?) : Manager;
	
	interface SocketEmitter {
	}

	export interface Manager {
		constructor (server, options : ManagerOptions);
		server : any;
		namespaces;
		sockets : SocketNamespace;
		settings : ManagerOptions;
		store;
		log;
		static;
		get(key);
		set(key, value);
		enable(key);
		disable(key);
		enabled(key);
		disabled(key);
		configure(env, fn);
		//initStore();
		//onHandshake(id, data);
		//onConnect(id);
		//onOpen(id);
		//onDispatch(room, packet, volatile, exceptions);
		//onJoin(id, name);
		//onLeave(id, room);
		//onClose(id);
		//onClientDispatch(id, packet);
		//onClientMessage(id, packet);
		//onClientDisconnect(id, reason);
		//onDisconnect(id, reason);
		//handleRequest(req, res);
		//handleUpgrade(req, socket, head);
		//handleHTTPRequest(data, req, res);
		//handleClient(data, req);
		//generateId();
		//handleHandshake(data, req, res);
		//handshakeData(data);
		//verifyOrigin(request);
		//handlePacket(sessid, packet);
		//authorize(data, fn);
		//transports(data);
		//checkRequest(req);
		of(nsp);
		//garbageCollection();
	}

	export interface SocketNamespace extends EventEmitter {
		manager;
		name;
		sockets;
		auth: boolean;
		clients(room) : any[];
		log;
		store;
		json : boolean;
		volatile: boolean;
		in(room) : SocketNamespace;
		to(room) : SocketNamespace;
		except(id) : SocketNamespace;
		//setFlags(): SocketNamespace;
		//packet(packet): SocketNamespace;
		send(data: any): SocketNamespace;
		socket(sid, readable?);
		authorization(fn): SocketNamespace;

		// Events
		on(event: string, listener: Function): SocketNamespace;
		on(event: 'connection', listener: (err: Error, socket: Socket) => void ): SocketNamespace;
	}

	export interface Socket extends EventEmitter {
		id;
		namespace : SocketNamespace;
		manager : Manager;
		disconnected : boolean;
		ackPackets: number;
		acks: any;
		readable: boolean;
		store;
		handshake;
		transport;
		log: boolean;
		json: boolean;
		volatile: Socket;
		broadcast : Socket;
		in(room) : SocketNamespace;
		to(room) : SocketNamespace;
		//setFlags();
		//onDisconnect(reason)
		join(name, fn) : Socket;
		leave(name, fn) : Socket;
		//packet(packet);
		//dispatch(packet, volatile);
		set(key, value, fn) : Socket;
		get(key, fn) : Socket;
		has(key, fn) : Socket;
		del(key, fn) : Socket;
		disconnect() : Socket;
		send(data, fn) : Socket;
		emit(name, ...arguments: any[]): Socket;

		// Events
		on(event: string, callback: Function):Socket;
		on(event: 'disconnect', callback: (socket: Socket) => void):Socket;

	}

	export interface StoreClient {
		store : Store;
		id;

		//get(key, fn);
		//set(key, value, fn);
		//has(key, fn);
		//del(key, fn);
		//destroy(expiration);
	}

	export interface Store extends EventEmitter {
		constructor (options);
		client(id) : StoreClient;
		destroyClient(id, expiration);
		destroy(expiration);

		//publish();
		//subscribe();
		//unsubscribe();
	}

	export interface MemoryStore extends Store { }
	export interface RedisStore extends Store {
		constructor (opts: RedisStoreOptions);
	}

	export interface Transport {
	}

	export interface Static {
	}

	export interface parser {
	}

	export interface RedisStoreOptions {
		nodeId?: Function;  // (fn) gets an id that uniquely identifies this node
		redis?: Function;  // (fn) redis constructor, defaults to redis
		redisPub?: any;  // (object) options to pass to the pub redis client
		redisSub?: any;  // (object) options to pass to the sub redis client
		redisClient?: any;  // (object) options to pass to the general redis client
		pack?: Function; // (fn) custom packing, defaults to JSON or msgpack if installed
		unpack?: Function; // (fn) custom packing, defaults to JSON or msgpack if installed
	}

	export interface ManagerOptions {
		origins?; // : '*:*'
		log?; // : true
		store? : Store; // : new MemoryStore;
		logger?; // : new Logger
		static?;// : new Static(this)
		heartbeats?;// : true
		resource?;// : '/socket.io'
		transports?;// : defaultTransports
		authorization?;//: false
		blacklist?;//: ['disconnect']
		//'log level'?;//: 3
		//'log colors'?;//: tty.isatty(process.stdout.fd)
		//'close timeout'?;//: 60
		//'heartbeat interval'?;//: 25
		//'heartbeat timeout'?;//: 60
		//'polling duration'?;//: 20
		//'flash policy server'?;//: true
		//'flash policy port'?;//: 10843
		//'destroy upgrade'?;//: true
		//'destroy buffer size'?;//: 10E7
		//'browser client'?;//: true
		//'browser client cache'?;//: true
		//'browser client minification'?;//: false
		//'browser client etag'?;//: false
		//'browser client expires'?;//: 315360000
		//'browser client gzip'?;//: false
		//'browser client handler'?;//: false
		//'client store expiration'?;//: 15
		//'match origin protocol'?;//: false
	}
}