import UserModel from "../models/user.js";
import bcrypt, { compare, hash, hashSync } from "bcrypt";
import { generateTokens } from "../Utils/generateTokens.js";
import { verifyRefreshToken } from "../middlewares/verifyRefreshToken.js";

const getAllUser = async () => {
  return await UserModel.find({}, { password: 0 }).populate(
    "cart.productId",
    "-description -slug -categoryId"
  );
};

const createCart = async (id, { productId, quantity }) => {
  const user = await UserModel.findById(id).populate(
    "cart.productId",
    "-slug -categoryId"
  );
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
// const totalPrice = async (user) => {
//   const cart = user.cart;
//   const mapTotalPrice = cart.map(
//     (item) => item.productId.price * item.quantity
//   );
//   const sumTotal = mapTotalPrice.reduce(
//     (accumulator, currentPrice) => accumulator + currentPrice,
//     0
//   );
//   console.log(sumTotal);
//   return sumTotal;
// };

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

const register = async ({ email, username, password, phone, role }) => {
  const user = await UserModel.findOne({ email });
  if (user) {
    throw { message: "Email đã tồn tại" };
  }
  const hashPassword = hashSync(password, 10);
  return await UserModel.create({
    email,
    username,
    password: hashPassword,
    phone,
    role,
  });
};

const updateUser = async (id, { email, username, phone, image }) => {
  try {
    const user = await UserModel.findById(id);
    if (!user) {
      throw { message: "Tài khoản không tồn tại" };
    }
    const exitsEmail = await UserModel.findOne({ email });
    if (user.id !== id && exitsEmail) {
      throw new Error("Email đã tồn tại");
    }
    const updateUser = await UserModel.findByIdAndUpdate(
      id,
      { email, username, phone, image },
      { new: true }
    );
    return updateUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const findUser = async (id) => {
  const user = await UserModel.findById(id, {
    password: 0,
    authGoogleId: 0,
    authFacebookId: 0,
    authType: 0,
    role: 0,
    refreshToken: 0,
  }).populate("cart.productId", "-description -slug -categoryId");
  if (!user) {
    throw { Error: "Không tồn tại user" };
  }
  return await user;
};

const login = async ({ email, password }) => {
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      throw new Error("Email chưa tồn tại");
    }
    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      throw Error("Mật khẩu không chính xác");
    }
    const { accessToken, refreshToken } = generateTokens(user?.id);
    await UserModel.findByIdAndUpdate(
      user.id,
      { refreshToken: refreshToken },
      { new: true }
    );
    return { accessToken, refreshToken, user };
  } catch (error) {
    console.log(error);
  }
};

const changePassword = async (id, { password, newPassword }) => {
  try {
    const user = await UserModel.findById(id);
    if (!user) {
      throw new Error("User không tồn tại");
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Mật khẩu không chính xác");
    }
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    const newUser = await UserModel.findByIdAndUpdate(
      id,
      { password: hashedNewPassword },
      { new: true }
    );
    return newUser;
  } catch (error) {
    throw error;
  }
};

const profile = async (id) => {
  const user = await UserModel.findById(id, {
    authGoogleId: 0,
    authFacebookId: 0,
    authType: 0,
    role: 0,
    refreshToken: 0,
  }).populate("cart.productId", " -categoryId");

  if (!user) throw new Error("User not found");

  const cart = user.cart;

  const priceCart = cart.map(
    (item) => parseInt(item.productId.price) * item.quantity
  );

  const totalPrice = priceCart.reduce(
    (accumulator, currentPrice) => accumulator + currentPrice,
    0
  );

  // Update the user object with the modified cart array
  user.cart = cart;
  user.totalPrice = totalPrice;

  // Save the updated user object
  const userUpdate = await user.save();

  // Logging the updated user object for debugging purposes

  return userUpdate;
};

const deleteUser = async (id) => {
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
  getAllUser,
  createCart,
  updateCart,
  deleteCart,
  register,
  login,
  changePassword,
  updateUser,
  findUser,
  profile,
  deleteUser,
  refreshToken,
};
