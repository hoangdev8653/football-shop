import mongoose from "mongoose";

const Brand = mongoose.Schema({
  name: {
    type: String,
  },
});

const BrandModel = mongoose.model("brand", Brand);

export default BrandModel;
