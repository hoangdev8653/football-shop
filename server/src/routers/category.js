import express from "express";
import { categoryController } from "../controllers/category.js";

const router = express.Router();

router.route("/").get(categoryController.getAllCategory);
router.route("/create").post(categoryController.createCategory);
router.route("/update").put(categoryController.updateCategory);
router.route("/delete").delete(categoryController.deleteCategory);

export default router;
