import { StatusCodes } from "http-status-codes";
import { orderServices } from "../services/order.js";

const createOrder = async (req, res) => {
  try {
    const id = req.userId;
    const { address, totalAmount } = req.body;
    const order = await orderServices.createOrder(id, {
      address,
      totalAmount,
    });
    return res
      .status(StatusCodes.CREATED)
      .json({ status: 201, message: "Xử lý thành công", content: order });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json("Server Error");
  }
};

const getOrderById = async (req, res) => {
  try {
    const id = req.userId;
    const order = await orderServices.getOrderById(id);
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: order });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json("Server Error");
  }
};

export const orderController = {
  createOrder,
  getOrderById,
};
