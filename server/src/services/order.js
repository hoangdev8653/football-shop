import orderModel from "../models/order.js";
import UserModel from "../models/user.js";
import ProductModel from "../models/product.js";

const createOrder = async (id, { address }) => {
  try {
    const user = await UserModel.findById(id).populate(
      "cart.productId",
      "-description -stockQuality -slug -categoryId"
    );
    if (user.cart.length <= 0) {
      throw new Error("Cart null");
    }
    console.log(user.cart);
    const order = await orderModel.create({
      userId: user._id,
      address,
      totalAmount: user.totalPrice,
      status: "Success",
      cart: user.cart,
    });
    await UserModel.findByIdAndUpdate(
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
    return userId;
  } catch (error) {
    console.log(error);
  }
};

export const orderServices = {
  createOrder,
  getOrderById,
};
