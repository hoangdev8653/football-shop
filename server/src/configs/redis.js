import redis from "redis";

// Khởi tạo Redis client với IP chính xác của container
const RedisClient = redis.createClient({
  url: "redis://172.17.0.2:6379", // Địa chỉ IP của container Redis
  legacyMode: false, // Chế độ hiện đại
  socket: {
    connectTimeout: 10000, // Thời gian chờ kết nối
  },
});

export const connectRedis = async () => {
  try {
    // Kết nối tới Redis
    await RedisClient.connect().catch((err) => {
      console.log(err);
    });

    // Lắng nghe sự kiện lỗi
    RedisClient.on("error", (err) => {
      console.error(`An error occurred with Redis: ${err}`);
      if (err.code === "ECONNREFUSED" || err.code === "ETIMEDOUT") {
        console.log("Closing server due to Redis connection error ❌");
        process.exit(1);
      }
    });

    console.log("Redis connected successfully ✅");
  } catch (err) {
    console.error(`Failed to connect to Redis: ${err.message}`);
    process.exit(1);
  }
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
