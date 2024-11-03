import express from "express";
import { bannerController } from "../controllers/banner.js";
import uploadCloud from "../middlewares/cloundinary.js";

const router = express.Router();

router.route("/").get(bannerController.getAllBanner);
router
  .route("/create")
  .post(uploadCloud.single("image"), bannerController.createBanner);
// router.route("/").put(uploadCloud.single("image"), blogRoutes.updateBlog);
router.route("/delete").delete(bannerController.deleteBanner);

export default router;
