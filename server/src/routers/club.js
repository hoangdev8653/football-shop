import express from "express";
import uploadCloud from "../middlewares/cloundinary.js";
import { clubController } from "../controllers/club.js";
const router = express.Router();

router.route("/").get(clubController.getAllClub);
router.route("/findById").get(clubController.getClub);
router.route("/detail/:slug").get(clubController.getClubBySlug);
router
  .route("/create")
  .post(uploadCloud.single("banner"), clubController.createClub);
router
  .route("/createImage")
  .post(uploadCloud.array("image", 10), clubController.createImageClub);
router.route("/updateById").put(clubController.updateClub);
router.route("/delete").delete(clubController.deleteClub);

export default router;
