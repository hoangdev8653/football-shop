import { userServices } from "../services/user.js";
import { convertJoiError } from "../Utils/validationUntil.js";
import { UserValidation, LoginValidation } from "../validations/user.js";
import { StatusCodes } from "http-status-codes";
import { getkey, setKey } from "../configs/redis.js";

const getAllUser = async (req, res) => {
  try {
    const user = await userServices.getAllUser();
    res.status(StatusCodes.OK).json({
      status: 200,
      message: "Xử lý thành công",
      content: user,
    });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Lỗi Server" });
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
    const productId = req.query.productId;
    const { quantity } = req.body;
    const cart = await userServices.updateCart(id, productId, { quantity });
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: cart });
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
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Lỗi Server" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // const { error } = LoginValidation.validate(req.body, { abortEarly: false });
    // if (error) {
    //   const errorDetails = convertJoiError(error);
    //   return res
    //     .status(StatusCodes.BAD_REQUEST)
    //     .json({ error: errorDetails, customMessage: "Invalid Input" });
    // }
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
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.query.id;
    const { email, password, username, phone } = req.body;
    const { error } = UserValidation.validate(req.body);
    if (error) {
      console.log("Validation Error:", error);
      const errorDetails = convertJoiError(error);
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ error: errorDetails, customMessage: "Invalid Input" });
    }
    const user = await userServices.updateUser(id, {
      email,
      password,
      username,
      phone,
    });
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: user });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Lỗi Server" });
  }
};

const updateAvatar = async (req, res) => {
  try {
    const fileData = req.file;
    const id = req.userId;
    const user = await userServices.updateAvarta(id, {
      image: fileData?.path,
    });
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: user });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ Error: "Lỗi Server" });
  }
};

const findUser = async (req, res) => {
  try {
    const id = req.query.id;
    const user = await userServices.findUserService(id);
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: user });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Lỗi Server" });
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
      .json({ message: "Lỗi Server" });
  }
};

const profileUser = async (req, res) => {
  try {
    const id = req.userId;
    const user = await userServices.profile(id);
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

export const userController = {
  getAllUser,
  deleteUser,
  registerUser,
  loginUser,
  updateUser,
  updateAvatar,
  findUser,
  profileUser,
  authGoogle,
  authFacebook,
  refreshToken,
  createCart,
  updateCart,
  deleteCart,
};
