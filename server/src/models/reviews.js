import mongoose from "mongoose";

const review = mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  rating: {
    type: String,
  },
  comment: {
    type: String,
  },
});

const ReviewModel = mongoose.model("review", review);

export default ReviewModel;
