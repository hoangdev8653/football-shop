import mongoose from "mongoose";

const whishList = mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const whishListModel = mongoose.model("WhishList", whishList);
export default whishListModel;
