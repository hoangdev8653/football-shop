import redis from "redis";

const RedisClient = redis.createClient();

export const connectRedis = async () => {
  await RedisClient.connect();
  RedisClient.on("error", (err) => {
    console.error(`An error occurred with Redis: ${err}`);
  });
  console.log("Redis connected successfully ✅");
};

export const setKey = async (key, value) => {
  await RedisClient.set(key, value);
  return console.log("SetKey Thành công");
};

export const getkey = async (key) => {
  return await RedisClient.get(key);
};
