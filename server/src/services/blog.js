import BlogModel from "../models/blog.js";

const getAllBlog = async () => {
  return await BlogModel.find({});
};

const createBlog = async ({ title, content, image }) => {
  return await BlogModel.create({ title, content, image });
};

const updateBlog = async (id, { title, content, image }) => {
  const blog = await BlogModel.findById(id);
  if (!blog) {
    throw { Error: "Không tồn tại" };
  }
  return await BlogModel.findByIdAndUpdate(
    id,
    { title, content, image },
    { new: true }
  );
};

const deleteBlog = async (id) => {
  const blog = await BlogModel.findById(id);
  if (!blog) {
    throw { Error: "Không tồn tại" };
  }
  return await BlogModel.deleteOne({ _id: id });
};

export const blogService = {
  getAllBlog,
  createBlog,
  updateBlog,
  deleteBlog,
};
