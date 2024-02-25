import mongoose from "mongoose";

const Product = mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: String,
  },
  stockQuality: {
    type: Number,
  },
  image: {
    type: [String],
  },
  slug: {
    type: String,
  },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
});

const ProductModel = mongoose.model("Product", Product);

export default ProductModel;
