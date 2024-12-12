import express from "express";
import uploadCloud from "../middlewares/cloundinary.js";
import { clubController } from "../controllers/club.js";
const router = express.Router();

router.route("/").get(clubController.getAllClub);
router.route("/findById").get(clubController.getClub);
router.route("/:slug").get(clubController.getClubBySlug);
router.route("/create").post(
  uploadCloud.fields([
    { name: "banner", maxCount: 1 },
    { name: "logo", maxCount: 1 },
  ]),
  clubController.createClub
);

router
  .route("/updateById")
  .put(uploadCloud.single("logo"), clubController.updateClub);
router.route("/delete").delete(clubController.deleteClub);

export default router;
