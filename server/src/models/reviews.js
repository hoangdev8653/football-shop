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
  time: {
    type: Date,
    default: Date.now(),
  },
});

const ReviewModel = mongoose.model("review", review);

export default ReviewModel;
