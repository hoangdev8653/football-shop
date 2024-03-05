import UserModel from "../models/user.js";
import bcrypt from "bcrypt";
import { generateTokens } from "../Utils/generateTokens.js";

const getAllUserService = async () => {
  return await UserModel.find({}, { password: 0 });
};

const registerService = async ({ email, username, password, phone, role }) => {
  const user = await UserModel.findOne({ email });
  const hashPassword = await bcrypt.hash(password, 10);
  if (user) {
    throw { message: "Email đã tồn tại" };
  }
  return await UserModel.create({
    email,
    username,
    password: hashPassword,
    phone,
    role,
  });
};

const updateUserService = async (id, { email, password, username, phone }) => {
  const user = await UserModel.findById(id);
  if (!user) {
    throw { message: "Tài khoản không tồn tại" };
  }
  return await UserModel.findByIdAndUpdate(
    id,
    { email, password, username, phone },
    { new: true }
  );
};

const updateAvartaService = async (id, { image }) => {
  try {
    const user = await UserModel.findById(id);
    if (!user) {
      throw new { Error: "Không tìm thấy user" }();
    }
    return await UserModel.findByIdAndUpdate(id, { image }, { new: true });
  } catch (error) {
    console.log(error);
  }
};

const findUserService = async (id) => {
  const user = await UserModel.findById(id);
  if (!user) {
    throw { Error: "Không tồn tại user" };
  }
  return await UserModel.findById(id);
};

const loginService = async (email, password) => {
  try {
    const user = await UserModel.findOne(
      { email },
      {
        password: 0,
        authGoogleId: 0,
        authFacebookId: 0,
        authType: 0,
        role: 0,
        refreshToken: 0,
      }
    );
    if (!user) {
      throw { Error: "Email or password is not valid" };
    }
    const { accessToken, refreshToken } = generateTokens(user.id);
    console.log(accessToken);
    await UserModel.findByIdAndUpdate(
      user.id,
      { refreshToken: refreshToken },
      { new: true }
    );
    return { accessToken, refreshToken, user };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const profileService = async (id) => {
  const user = await UserModel.findById(id);
  if (!user) throw error("User not found");
  return user;
};

const deleUserService = async (id) => {
  try {
    const user = await UserModel.findById(id);
    if (!user) {
      throw { message: "Không tìm thấy user" };
    }
    return await UserModel.deleteOne({ _id: id });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const userServices = {
  getAllUserService,
  registerService,
  loginService,
  updateUserService,
  updateAvartaService,
  findUserService,
  profileService,
  deleUserService,
};
