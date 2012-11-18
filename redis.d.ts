// https://github.com/mranney/node_redis

declare module "redis" {
	export function createClient(port_arg, host_arg, options: any) : RedisClient;
	export function print(err: Error, reply: any);
	export var debug_mode: bool;
	
	interface RedisClient {
		// event: connect
		// event: error
		// event: message
		// event: pmessage
		// event: subscribe
		// event: psubscribe
		// event: unsubscribe
		// event: punsubscribe
	
		end();

		// Connection (http://redis.io/commands#connection)
		auth(password: string, callback?: (err: Error, reply: any) => void);
		ping(callback?: (err: Error, reply: number) => void);

		// Strings (http://redis.io/commands#strings)
		append(key: string, value: string, callback?: (err: Error, reply: number) => void);
		bitcount(key: string, callback?: (err: Error, reply: number) => void);
		bitcount(key: string, start: number, end:number, callback?: (err: Error, reply: number) => void);
		set(key: string, value: string, callback?: (err: Error, reply: string) => void);
		get(key: string, callback?: (err: Error, reply: string) => void);
		exists(key: string, value: string, callback?: (err: Error, reply: number) => void);
		
		/*
		commands = set_union([
			"get", "set", "setnx", "setex", "append", "strlen", "del", "exists", "setbit", "getbit", "setrange", "getrange", "substr",
			"incr", "decr", "mget", "rpush", "lpush", "rpushx", "lpushx", "linsert", "rpop", "lpop", "brpop", "brpoplpush", "blpop", "llen", "lindex",
			"lset", "lrange", "ltrim", "lrem", "rpoplpush", "sadd", "srem", "smove", "sismember", "scard", "spop", "srandmember", "sinter", "sinterstore",
			"sunion", "sunionstore", "sdiff", "sdiffstore", "smembers", "zadd", "zincrby", "zrem", "zremrangebyscore", "zremrangebyrank", "zunionstore",
			"zinterstore", "zrange", "zrangebyscore", "zrevrangebyscore", "zcount", "zrevrange", "zcard", "zscore", "zrank", "zrevrank", "hset", "hsetnx",
			"hget", "hmset", "hmget", "hincrby", "hdel", "hlen", "hkeys", "hvals", "hgetall", "hexists", "incrby", "decrby", "getset", "mset", "msetnx",
			"randomkey", "select", "move", "rename", "renamenx", "expire", "expireat", "keys", "dbsize", "auth", "ping", "echo", "save", "bgsave",
			"bgrewriteaof", "shutdown", "lastsave", "type", "multi", "exec", "discard", "sync", "flushdb", "flushall", "sort", "info", "monitor", "ttl",
			"persist", "slaveof", "debug", "config", "subscribe", "unsubscribe", "psubscribe", "punsubscribe", "publish", "watch", "unwatch", "cluster",
			"restore", "migrate", "dump", "object", "client", "eval", "evalsha"], require("./lib/commands"));
		*/
		
		connected: bool;
		retry_delay: number;
		retry_backoff: number;
		command_queue: any[];
		offline_queue: any[];
		server_info: { redis_version: string, versions: number[] };
	}
}