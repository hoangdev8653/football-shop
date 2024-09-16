import express from "express";
import { productController } from "../controllers/product.js";
import uploadCloud from "../middlewares/cloundinary.js";

const router = express.Router();

router.route("/").get(productController.getAllProduct);
router.route("/").get(productController.getProductByPages);
router.route("/detail/:slug").get(productController.getProductBySlug);
router.route("/search").get(productController.getProductByKey);
router.route("/ao-bong-da-clb/").get(productController.getProductClub);
router.route("/ao-bong-da-doi-tuyen/").get(productController.getProductNation);
router.route("/ao-bong-da-khong-logo/").get(productController.getProductNoLogo);
router.route("/ao-bong-da-clb-vn/").get(productController.getProductFromVN);
router.route("/ao-dep-nhat/").get(productController.getProductPretty);
router.route("/phu-kien/").get(productController.getProductAccessory);
router
  .route("/create")
  .post(uploadCloud.array("image", 10), productController.createProduct);
router.route("/update").put(productController.updateProduct);
router.route("/delete").delete(productController.deleteProduct);

export default router;
