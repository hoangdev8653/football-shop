import express from "express";
import { whishListController } from "../controllers/whishList.js";
import validateToken from "../middlewares/verifyAccessToken.js";
const router = express.Router();

router
  .route("/getByUser")
  .get(validateToken, whishListController.getWhishListByUser);
router
  .route("/addProduct")
  .post(validateToken, whishListController.addWhishList);
router.route("/deleteProduct").delete(whishListController.deleteWhishList);

export default router;
