import orderModel from "../models/order.js";
import UserModel from "../models/user.js";

const createOrder = async (id, { address }) => {
  try {
    const user = await UserModel.findById(id);
    if (!user) {
      throw new Error("user not found");
    }
    const order = await orderModel.create({
      userId: user._id,
      address,
      totalAmount: user.totalPrice,
      status: "Success",
      cart: user.cart,
    });
    const userUpdate = await UserModel.findByIdAndUpdate(
      id,
      {
        cart: [],
        totalPrice: 0,
      },
      { new: true }
    );
    return order;
  } catch (error) {
    console.log(error);
  }
};

const getOrderById = async (id) => {
  try {
    const userId = await orderModel.find({ userId: id });
    if (!userId) {
      throw new Error("Order not found");
    }
    return userId;
  } catch (error) {
    console.log(error);
  }
};

export const orderServices = {
  createOrder,
  getOrderById,
};
