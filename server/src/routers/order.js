import express from "express";
import { orderController } from "../controllers/order.js";
import verifyAccessToken from "../middlewares/verifyAccessToken.js";
const router = express.Router();

router.route("/create").post(verifyAccessToken, orderController.createOrder);

export default router;
