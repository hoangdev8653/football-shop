import express from "express";
import { reviewController } from "../controllers/reviews.js";
import validateToken from "../middlewares/verifyAccessToken.js";

const router = express.Router();

router.route("/").get(reviewController.getReviewsByProduct);
router.route("/getAllReview").get(reviewController.getAllReview);
router.route("/create").post(validateToken, reviewController.createReview);
router.route("/update").put(reviewController.updateReview);
router.route("/delete").delete(reviewController.deleteReview);

export default router;
