import StatusCodes from "http-status-codes";
import { blogService } from "../services/blog.js";
import { convertJoiError } from "../Utils/validationUntil.js";
import { validation } from "../validations/blog.js";

const getAllBlog = async (req, res) => {
  try {
    const blog = await blogService.getAllBlog();
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: blog });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ Error: "Server Error" });
  }
};

const createBlog = async (req, res) => {
  try {
    const { title, content, image } = req.body;
    const fileData = req.file;
    console.log(fileData);
    const { error } = validation.blog.validate(
      { ...req.body, image: fileData?.path },
      { abortEarly: false }
    );
    if (error) {
      console.log("Validation Error:", error);
      const errorDetails = convertJoiError(error);
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ error: errorDetails, customMessage: "Invalid Input" });
    }
    const blog = await blogService.createBlog({
      title,
      content,
      image: fileData?.path,
    });
    return res
      .status(StatusCodes.CREATED)
      .json({ status: 201, message: "Xử lý thành công", content: blog });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ Error: "Server Error" });
  }
};

const updateBlog = async (req, res) => {
  try {
    const { title, content, image } = req.body;
    const id = req.query.id;
    const fileData = req.file;
    const { error } = validation.blog.validate(
      { ...req.body, image: fileData?.path },
      { abortEarly: false }
    );
    if (error) {
      console.log("Validation Error:", error);
      const errorDetails = convertJoiError(error);
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ error: errorDetails, customMessage: "Invalid Input" });
    }
    const blog = await blogService.updateBlog(id, {
      title,
      content,
      image: fileData?.path,
    });
    return res
      .status(StatusCodes.OK)
      .json({ status: 201, message: "Xử lý thành công", content: blog });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ Error: "Server Error" });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const id = req.query.id;
    const blog = await blogService.deleteBlog(id);
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: blog });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.OK).json({ Error: "Server Error" });
  }
};

export const blogRoutes = {
  getAllBlog,
  createBlog,
  updateBlog,
  deleteBlog,
};
