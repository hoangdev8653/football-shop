import express from "express";
import { reviewController } from "../controllers/reviews.js";

const router = express.Router();

router.route("/").get(reviewController.getAllReview);
router.route("/create").post(reviewController.createReview);
router.route("/update").put(reviewController.updateReview);
router.route("/delete").delete(reviewController.deleteReview);

export default router;
