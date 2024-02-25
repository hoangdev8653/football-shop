import CategoryModel from "../models/category.js";

const getAllCategory = async () => {
  return await CategoryModel.find({});
};

const createCategory = async ({ name, slug }) => {
  const category = await CategoryModel.findOne({ name });
  if (category) {
    throw { Error: "Đã tồn tại" };
  }
  return await CategoryModel.create({ name, slug });
};

const updateCategory = async (id, { name, slug }) => {
  const category = await CategoryModel.findById(id);
  if (!category) {
    throw { Error: "Không tồn tại" };
  }
  return await CategoryModel.findByIdAndUpdate(
    id,
    { name, slug },
    { new: true }
  );
};

const deleteCategory = async (id) => {
  const category = await CategoryModel.findById(id);
  if (!category) {
    throw { Error: "Không tồn tại" };
  }
  return await CategoryModel.deleteOne({ _id: id });
};

export const categoryService = {
  getAllCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
