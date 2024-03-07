import mongoose from "mongoose";
import bcrypt from "bcrypt";

const User = mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
    },
    image: {
      type: String,
      default: "",
    },
    username: {
      type: String,
    },
    password: {
      type: String,
    },
    authGoogleId: {
      type: String,
      default: null,
    },
    authFacebookId: {
      type: String,
      default: null,
    },
    authType: {
      type: String,
      enum: ["local", "google", "facebook"],
      default: "local",
    },
    phone: {
      type: String,
    },
    role: {
      type: String,
      default: "user",
    },
    cart: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        quantity: Number,
      },
    ],
    totalPrice: {
      type: Number,
      default: 0,
    },
    refreshToken: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

User.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(this.password, salt);
    this.password = hashPassword;
  } catch (error) {
    next(error);
  }
});

User.methods.checkPassword = async function (password) {
  try {
    console.log(password);
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    console.log("Lỗi", error);
    return false;
  }
};

const UserModel = mongoose.model("user", User);
export default UserModel;
