import mongoose from "mongoose";

const Category = mongoose.Schema({
  name: {
    type: String,
  },
  slug: {
    type: String,
  },
});

const CategoryModel = mongoose.model("Category", Category);

export default CategoryModel;
