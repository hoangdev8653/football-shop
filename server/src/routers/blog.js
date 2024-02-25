import express from "express";
import { blogRoutes } from "../controllers/blog.js";
import uploadCloud from "../middlewares/cloundinary.js";

const router = express.Router();

router.route("/").get(blogRoutes.getAllBlog);
router.route("/").post(uploadCloud.single("image"), blogRoutes.createBlog);
router.route("/").put(uploadCloud.single("image"), blogRoutes.updateBlog);
router.route("/").delete(blogRoutes.deleteBlog);

export default router;
