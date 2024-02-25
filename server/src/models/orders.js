import mongoose from "mongoose";

const Order = mongoose.Schema({
  orderDate: {
    type: String,
  },
  customerID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  totalAmount: {
    type: String,
  },
});

const orderModel = mongoose.model("order", Order);

export default orderModel;
