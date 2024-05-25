import express from "express";
const router = express.Router();
import verifyAccessToken from "../middlewares/verifyAccessToken.js";
import passport from "../middlewares/passport.js";
import { userController } from "../controllers/user.js";
import uploadCloud from "../middlewares/cloundinary.js";

router.route("/").get(userController.getAllUser);
router.route("/findone").get(userController.findUser);
router.route("/ca-nhan").get(verifyAccessToken, userController.profileUser);

router.route("/refresh-token").post(userController.refreshToken);
router
  .route("/auth/google")
  .post(passport.authenticate("google-plus-token"), userController.authGoogle);
router
  .route("/auth/facebook")
  .post(passport.authenticate("facebook"), userController.authFacebook);

router.route("/dang-ki").post(userController.registerUser);
router.route("/dang-nhap").post(userController.loginUser);
router
  .route("/update")
  .post(
    uploadCloud.single("image"),
    verifyAccessToken,
    userController.updateUser
  );
router
  .route("/changePassword")
  .post(verifyAccessToken, userController.changePassword);

router.route("/createCart").post(verifyAccessToken, userController.createCart);
router.route("/updateCart").put(verifyAccessToken, userController.updateCart);
router.route("/logout").post(verifyAccessToken, userController.logOut);
router.route("/forget-password").post(userController.forgotPassword);
router
  .route("/reset-password")
  .post(verifyAccessToken, userController.resetPassword);

router
  .route("/deleteCart")
  .delete(verifyAccessToken, userController.deleteCart);
router.route("/delete").delete(userController.deleteUser);

export default router;
