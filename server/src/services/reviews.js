import ReviewModel from "../models/reviews.js";

const getAllReview = async () => {
  return await ReviewModel.find({})
    .populate("userId", "username email")
    .populate("productId", "name price");
};

const getReviewByUser = async () => {
  return await ReviewModel.find().populate("user");
};

const createReview = async ({ rating, comment, userId, productId }) => {
  return await ReviewModel.create({ rating, comment, userId, productId });
};

const updateReview = async (id, { rating, comment }) => {
  const review = await ReviewModel.findById(id);
  if (!review) {
    throw { Error: "Không tồn tại" };
  }
  return await ReviewModel.findByIdAndUpdate(
    id,
    { rating, comment },
    { new: true }
  );
};

const deleteReview = async (id) => {
  const review = await ReviewModel.findById(id);
  if (!review) {
    throw { Error: "Không tồn tại" };
  }
  return await ReviewModel.deleteOne({ _id: id });
};
export const reviewService = {
  getAllReview,
  createReview,
  updateReview,
  deleteReview,
};
