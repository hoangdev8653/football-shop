import { userServices } from "../services/user.js";
import { convertJoiError } from "../Utils/validationUntil.js";
import { UserValidation, LoginValidation } from "../validations/user.js";
import { StatusCodes } from "http-status-codes";
import { getkey, setKey } from "../configs/redis.js";

const getAllUser = async (req, res) => {
  try {
    const user = await userServices.getAllUser();
    return res.status(StatusCodes.OK).json({
      status: 200,
      message: "Xử lý thành công",
      content: user,
    });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Server Error" });
  }
};

const createCart = async (req, res) => {
  try {
    const id = req.userId;
    const { productId, quantity } = req.body;
    const cart = await userServices.createCart(id, { productId, quantity });
    return res
      .status(StatusCodes.CREATED)
      .json({ status: 201, message: "Xử lý thành công", content: cart });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ Error: "Server Error" });
  }
};

const updateCart = async (req, res) => {
  try {
    const id = req.userId;
    const { products } = req.body;
    const user = await userServices.updateCart(id, products);
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: user });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ Error: "Server Error" });
  }
};

const deleteCart = async (req, res) => {
  try {
    const id = req.userId;
    const productId = req.query.productId;
    const cart = await userServices.deleteCart(id, productId);
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: cart });
  } catch (error) {
    console.log(error.message);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ Error: "Server Error" });
  }
};

const registerUser = async (req, res) => {
  try {
    const { email, username, password, phone, role } = req.body;
    const { error } = UserValidation.validate(req.body, { abortEarly: false });
    if (error) {
      console.log("Validation Error:", error);
      const errorDetails = convertJoiError(error);
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ error: errorDetails, customMessage: "Invalid Input" });
    }
    const user = await userServices.register({
      email,
      username,
      password,
      phone,
      role,
    });
    return res
      .status(StatusCodes.CREATED)
      .json({ status: 201, message: "Xử lý thành công", content: user });
  } catch (error) {
    console.log("register error: ", error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Server Error" });
  }
};

const changePassword = async (req, res) => {
  try {
    const id = req.userId;
    const { password, newPassword } = req.body;
    const user = await userServices.changePassword(id, {
      password,
      newPassword,
    });
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: user });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const { error } = LoginValidation.validate(req.body, { abortEarly: false });
    if (error) {
      const errorDetails = convertJoiError(error);
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ error: errorDetails, customMessage: "Invalid Input" });
    }
    const { accessToken, refreshToken, user } = await userServices.login({
      email,
      password,
    });
    res.cookie("token", accessToken, { httpOnly: true });
    res.status(StatusCodes.OK).json({
      status: 200,
      message: "Xử lý thành công",
      content: user,
      accessToken,
      refreshToken,
    });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.userId;
    const fileData = req.file;
    const { email, username, phone, image } = req.body;
    const user = await userServices.updateUser(id, {
      email,
      username,
      phone,
      image: fileData?.path,
    });
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: user });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Server Error" });
  }
};

const updateUserByAdmin = async (req, res, next) => {
  try {
    const id = req.query.id;
    const { email, username, role, phone } = req.body;
    const user = await userServices.updateUserByAdmin(id, {
      email,
      username,
      role,
      phone,
    });
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: user });
  } catch (error) {
    console.log(error);
    next(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Server Error" });
  }
};

const findUser = async (req, res) => {
  try {
    const id = req.query.id;
    const user = await userServices.findUser(id);
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: user });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Server Error" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.query.id;
    const user = await userServices.deleteUser(id);
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: user });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Server Error" });
  }
};

const profileUser = async (req, res) => {
  try {
    const id = req.userId;
    console.log(id);

    const user = await userServices.profile(id);
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: user });
  } catch (error) {
    console.log(error.message);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ Error: "Server Error" });
  }
};

const authGoogle = async (req, res, next) => {
  res.status(StatusCodes.OK).json({ status: 200, message: "Xử lý thành công" });
  next();
};
const authFacebook = async (req, res, next) => {
  console.log("user", req.user);
};

const refreshToken = async (req, res) => {
  try {
    const { refreshToken } = req.body;
    const newToken = await userServices.refreshToken(refreshToken);
    return res.status(StatusCodes.OK).json({
      status: 200,
      message: "Xử lý thành công",
      newToken,
    });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ Error: "Server Error" });
  }
};

const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await userServices.forgotPassword({ email });
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: user });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
  }
};

const resetPassword = async (req, res, next) => {
  try {
    const token = req.query;
    const { newPassword } = req.body;
    const user = await userServices.resetPassword(token, { newPassword });
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: user });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
  }
};

const logOut = async (req, res) => {
  try {
    const id = req.userId;
    const user = await userServices.logOut(id);
    return res
      .status(StatusCodes.OK)
      .json({ message: "Xử lý thành công", status: 200, content: user });
  } catch (error) {
    console.log(error.message);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Server Error", status: 500 });
  }
};

export const userController = {
  getAllUser,
  deleteUser,
  registerUser,
  loginUser,
  changePassword,
  updateUser,
  updateUserByAdmin,
  findUser,
  profileUser,
  authGoogle,
  authFacebook,
  refreshToken,
  createCart,
  updateCart,
  deleteCart,
  forgotPassword,
  resetPassword,
  logOut,
};
