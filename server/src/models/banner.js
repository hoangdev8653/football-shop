import mongoose from "mongoose";

const Banner = mongoose.Schema({
  title: {
    type: String,
  },
  image: {
    type: String,
  },
});

const BannerModel = mongoose.model("Banner", Banner);

export default BannerModel;
