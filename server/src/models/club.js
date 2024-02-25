import mongoose from "mongoose";

const Club = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  banner: {
    type: String,
    // default: "",
  },

  stadium: {
    type: String,
    required: true,
  },
  establish: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  productId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

const ClubModel = mongoose.model("club", Club);
export default ClubModel;
