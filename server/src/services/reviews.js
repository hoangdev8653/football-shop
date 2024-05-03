import ReviewModel from "../models/reviews.js";

const getAllReview = async () => {
  const reviews = await ReviewModel.find({})
    .populate("userId", "username image")
    .populate("productId", "name");
  const rvLastet = reviews.sort((a, b) => b.time - a.time);
  const rating = reviews.map((item) => {
    return item.rating;
  });
  const totalRating = rating.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const ratingLength = rating.length;
  const averageRating = parseFloat(totalRating / ratingLength);
  return { rvLastet, ratingLength, averageRating };
};

const getReviewsByProduct = async (productId) => {
  try {
    const reviews = await ReviewModel.find({ productId: productId })
      .populate("userId", "username image")
      .populate("productId", "name");
    const rvLastet = reviews.sort((a, b) => b.time - a.time);
    const rating = reviews.map((item) => {
      return item.rating;
    });
    const totalRating = rating.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    const ratingLength = rating.length;
    const averageRating = parseFloat(totalRating / ratingLength);
    return { rvLastet, ratingLength, averageRating };
  } catch (error) {
    console.log(error.message);
    return [];
  }
};

const createReview = async (id, { rating, comment, productId }) => {
  try {
    return await ReviewModel.create({ rating, comment, userId: id, productId });
  } catch (error) {
    console.log(error);
  }
};

const updateReview = async (id, { rating, comment }) => {
  const exitsReview = await ReviewModel.findById(id);
  if (!exitsReview) {
    throw new Error("Review không tồn tại");
  }
  const updateReview = await ReviewModel.findByIdAndUpdate(
    id,
    { rating, comment },
    { new: true }
  );
  console.log(updateReview);
  return updateReview;
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
  getReviewsByProduct,
  createReview,
  updateReview,
  deleteReview,
};
