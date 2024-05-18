import mongoose from "mongoose";

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
    passwordResetToken: {
      type: String,
      default: undefined,
    },
    passwordResetExpires: {
      type: Date,
      default: undefined,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("user", User);
export default UserModel;
