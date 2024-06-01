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
    type: Number,
  },
  comment: {
    type: String,
  },
  like: {
    type: Number,
    default: 0,
  },
  time: {
    type: Date,
    default: Date.now(),
  },
});

const ReviewModel = mongoose.model("review", review);

export default ReviewModel;
