import { StatusCodes } from "http-status-codes";
import { categoryService } from "../services/category.js";

const getAllCategory = async (req, res) => {
  try {
    const category = await categoryService.getAllCategory();
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: category });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Lỗi Server" });
  }
};

const createCategory = async (req, res) => {
  try {
    const { name, slug } = req.body;
    const category = await categoryService.createCategory({ name, slug });
    return res.status(StatusCodes.CREATED).json({
      status: 201,
      message: "xử lý thành công",
      content: category,
    });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Lỗi Server" });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { name, slug } = req.body;
    const id = req.query.id;
    const category = await categoryService.updateCategory(id, { name, slug });
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: category });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ Error: "Lỗi Server" });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const id = req.query.id;
    const category = await categoryService.deleteCategory(id);
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: category });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ Error: "Lỗi Server" });
  }
};

export const categoryController = {
  createCategory,
  getAllCategory,
  updateCategory,
  deleteCategory,
};
