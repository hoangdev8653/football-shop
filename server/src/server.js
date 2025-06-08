import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDB } from "./configs/connectDb.js";
import { connectRedis } from "./configs/redis.js";
import { routers } from "./routers/index.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { corsOptions } from "./configs/cors.js";
import morgan from "morgan";

const port = process.env.PORT || 4000;
connectDB();
// connectRedis();

const app = express();
// app.use(cors(corsOptions));
app.use(cors());
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
app.use("/whishList", routers.whishListRoutes);

app.get("/", (req, res) => {
  res.send("Football-shop");
});

app.use((error, req, res, next) => {
  error.statusCode = error.statusCode || 500;
  error.status = error.status || "error";
  res.status(error.statusCode).json({
    status: error.statusCode,
    message: error.message,
  });
});

app.listen(port, (req, res) => {
  console.log(`listen running on port ${port}`);
});
