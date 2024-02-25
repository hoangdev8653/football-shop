import mongoose from "mongoose";

const User = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
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
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("user", User);
export default UserModel;
