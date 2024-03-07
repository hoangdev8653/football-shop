import UserModel from "../models/user.js";
import bcrypt from "bcrypt";
import { generateTokens } from "../Utils/generateTokens.js";
import { verifyRefreshToken } from "../middlewares/verifyRefreshToken.js";

const getAllUserService = async () => {
  return await UserModel.find({}, { password: 0 }).populate(
    "cart.productId",
    "-description -slug -categoryId"
  );
};

const createCart = async (id, { productId, quantity }) => {
  const user = await UserModel.findById(id);
  if (!user) {
    throw new Error("User not found");
  }
  const cart = user.cart;
  const productIndex = cart.findIndex(
    (product) => product.productId.toString() === productId
  );
  if (productIndex !== -1) {
    cart[productIndex].quantity += quantity;
  } else {
    cart.push({ productId, quantity });
  }

  const updateCart = await user.save();
  return updateCart;
};

const updateCart = async (id, productId, { quantity }) => {
  try {
    const user = await UserModel.findById(id);
    if (!user) throw new Error("user Not found");
    const cart = user.cart;
    const productIndex = cart.findIndex(
      (product) => product.productId.toString() === productId
    );

    if (productIndex !== -1) {
      cart[productIndex].quantity = quantity;
    }
    const updateCart = await user.save();
    return updateCart;
  } catch (error) {
    console.log(error);
  }
};
const totalPrice = async (user) => {
  const cart = user.cart;
  const mapTotalPrice = cart.map(
    (item) => item.productId.price * item.quantity
  );
  const sumTotal = mapTotalPrice.reduce(
    (accumulator, currentPrice) => accumulator + currentPrice,
    0
  );
  console.log(sumTotal);
  return sumTotal;
};

const deleteCart = async (id, productId) => {
  try {
    const existingUser = await UserModel.findById(id);
    if (!existingUser) {
      throw new Error("User not found");
    }

    const cart = existingUser.cart;
    const productIndex = cart.findIndex(
      (product) => product.productId.toString() === productId
    );

    if (productIndex !== -1) {
      // Xóa sản phẩm khỏi mảng cart
      cart.splice(productIndex, 1);

      // Cập nhật user sau khi xóa sản phẩm
      const updatedUser = await existingUser.save();

      // Tính toán lại totalPrice và cập nhật user
      // const newTotalPrice = await totalPrice(updatedUser);
      // updatedUser.totalPrice = newTotalPrice;
      await updatedUser.save();

      return updatedUser;
    } else {
      console.log("Product not found in user's cart");
    }
  } catch (error) {
    console.error(error);
  }
};

const registerService = async ({ email, username, password, phone, role }) => {
  const user = await UserModel.findOne({ email });
  const hashPassword = await bcrypt.hash(password, 10);
  if (user) {
    throw { message: "Email đã tồn tại" };
  }
  const User = new UserModel({
    email,
    username,
    password,
    phone,
    role,
  });
  return await User.save();
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
  const user = await UserModel.findById(id, { password: 0 }).populate(
    "cart.productId",
    "-description -slug -categoryId"
  );
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
    const isValid = await user.checkPassword(password);
    if (!isValid) {
      throw Error("Mật khẩu không chính xác");
    }
    const { accessToken, refreshToken } = generateTokens(user.id);
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
  const user = await UserModel.findById(id, {
    password: 0,
    authGoogleId: 0,
    authFacebookId: 0,
    authType: 0,
    role: 0,
    refreshToken: 0,
  }).populate("cart.productId", "-description -slug -categoryId");
  if (!user) throw error("User not found");
  const cart = user.cart;
  const mapTotalPrice = cart.map(
    (item) => item.productId.price * item.quantity
  );
  const sumTotal = mapTotalPrice.reduce(
    (accumulator, currentPrice) => accumulator + currentPrice,
    0
  );
  console.log(sumTotal);
  user.totalPrice = sumTotal;
  await user.save();
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

const refreshToken = async (refreshToken) => {
  const { userId } = await verifyRefreshToken(refreshToken);
  const newToken = generateTokens(userId);
  await UserModel.findByIdAndUpdate(
    userId,
    { refreshToken: newToken.refreshToken },
    { new: true }
  );
  return newToken;
};

export const userServices = {
  getAllUserService,
  createCart,
  updateCart,
  deleteCart,
  registerService,
  loginService,
  updateUserService,
  updateAvartaService,
  findUserService,
  profileService,
  deleUserService,
  refreshToken,
};
