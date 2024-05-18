import redis from "redis";

const RedisClient = redis.createClient();

export const connectRedis = async () => {
  await RedisClient.connect();
  RedisClient.on("error", (err) => {
    console.error(`An error occurred with Redis: ${err}`);
    if (err.code === "ECONNREFUSED") {
      console.log("Closing server due to Redis connection error ❌");
      process.exit(1);
    }
  });
  console.log("Redis connected successfully ✅");
};

export const setKey = async (key, value) => {
  await RedisClient.set(key, value);
};

export const getkey = async (key) => {
  return await RedisClient.get(key);
};

export const deleteKey = (key) => {
  return new Promise((resolve, reject) => {
    RedisClient.del(key, (err, reply) => {
      if (err) {
        console.error(`Error deleting key ${key}: ${err}`);
        reject(err);
        return;
      }
      console.log(`Deleted key ${key} successfully  `);
      resolve(reply);
    });
  });
};

export default RedisClient;
