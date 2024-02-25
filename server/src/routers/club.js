import express from "express";
import uploadCloud from "../middlewares/cloundinary.js";
import {
  getAllClub,
  getClub,
  createClub,
  createImageClub,
  updateClub,
  deleteClub,
} from "../controllers/club.js";
const router = express.Router();

router.route("/").get(getAllClub);
router.route("/").get(getClub);
router.route("/create").post(uploadCloud.single("banner"), createClub);
router
  .route("/createImage")
  .post(uploadCloud.array("image", 10), createImageClub);
router.route("/updateById").put(updateClub);
router.route("/delete").delete(deleteClub);

export default router;
