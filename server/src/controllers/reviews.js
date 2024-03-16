import { StatusCodes } from "http-status-codes";
import { reviewService } from "../services/reviews.js";

const getAllReview = async (req, res) => {
  try {
    const review = await reviewService.getAllReview();
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: review });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ Error: "Lỗi Server" });
  }
};

const getReviewByUser = async (req, res) => {
  try {
    const review = await reviewService.getReviewByUser();
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: review });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ Error: "Lỗi Server" });
  }
};

const getReviewsByProduct = async (req, res) => {
  try {
    const productId = req.query.productId;
    const review = await reviewService.getReviewsByProduct(productId);
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: review });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
  }
};

const createReview = async (req, res) => {
  try {
    const id = req.userId;
    const { rating, comment, productId } = req.body;
    const review = await reviewService.createReview(id, {
      rating,
      comment,
      productId,
    });
    return res
      .status(StatusCodes.CREATED)
      .json({ status: 201, message: "Xử lý thành công", content: review });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ Error: "Lỗi Server" });
  }
};

const updateReview = async (req, res) => {
  try {
    const id = req.query.id;
    const { rating, comment } = req.body;
    const review = await reviewService.updateReview(id, { rating, comment });
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: review });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ Error: "Lỗi Server" });
  }
};

const deleteReview = async (req, res) => {
  try {
    const id = req.query.id;
    const review = await reviewService.deleteReview(id);
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: review });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ Error: "Xử lý thành công" });
  }
};

export const reviewController = {
  getAllReview,
  getReviewsByProduct,
  createReview,
  updateReview,
  deleteReview,
};
