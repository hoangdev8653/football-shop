import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.CONNECTION_STRING || "mongodb://127.0.0.1:27017/shop-football"
    );
    console.log("✅ Kết nối MongoDB thành công");
  } catch (err) {
    console.error("❌ Lỗi kết nối MongoDB: " + err);
  }
};
