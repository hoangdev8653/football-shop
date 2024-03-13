import orderModel from "../models/order.js";

const createOrder = async (id, { address, totalAmount }) => {
  try {
    const user = await orderModel
      .find()
      .populate("userId", "totalPrice cart email");
    console.log(user);
    // const order = await orderModel.create({ userId: id, address, totalAmount });
    // return order;
  } catch (error) {
    console.log(error);
  }
};

export const orderServices = {
  createOrder,
};
