import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDB } from "./configs/connectDb.js";
// import { connectRedis } from "./configs/redis.js";
import { routers } from "./routers/index.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { corsOptions } from "./configs/cors.js";
import morgan from "morgan";
import { Server } from "socket.io";
import http from "http";

const port = process.env.PORT;
connectDB();
// connectRedis();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3007",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  },
});

// Xử lý các sự kiện kết nối từ phía máy khách
io.on("connection", (socket) => {
  console.log("New client connected");

  // Xử lý các sự kiện khác tại đây
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use("/user", routers.userRoutes);
app.use("/review", routers.reviewRoutes);
app.use("/category", routers.categoryRoutes);
app.use("/club", routers.clubRoutes);
app.use("/product", routers.productRoutes);
app.use("/blog", routers.blogRoutes);
app.use("/order", routers.orderRoutes);

app.listen(port, (req, res) => {
  console.log(`listen running on port ${port}`);
});
