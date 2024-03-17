import mongoose from "mongoose";

const Order = mongoose.Schema({
  orderDate: {
    type: Date,
    default: Date.now(),
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  status: {
    type: String,
    default: "Canncel",
    enum: ["Canncel", "Success"],
  },
  totalAmount: {
    type: String,
  },
  address: {
    type: String,
    default: "",
  },
  cart: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: Number,
    },
  ],
});

const orderModel = mongoose.model("order", Order);

export default orderModel;
