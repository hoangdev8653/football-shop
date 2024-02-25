import mongoose from "mongoose";

const ProductAttribute = mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
  },
  size: {
    type: String,
  },
  coler: {
    type: String,
  },
  material: {
    type: String,
  },
});
const ProductAttributeModel = mongoose.model(
  "productAtribute",
  ProductAttribute
);

export default ProductAttributeModel;
