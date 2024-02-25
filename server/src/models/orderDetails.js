import mongoose from "mongoose";

const orderDetail = mongoose.Schema({
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "orders",
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
  },
  quality: {
    type: String,
  },
  price: {
    type: String,
  },
});

const orderDetailModel = mongoose.model("orderDeatial", orderDetail);

export default orderDetailModel;
