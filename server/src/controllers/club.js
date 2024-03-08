import { convertJoiError } from "../Utils/validationUntil.js";
import { clubValidation } from "../validations/club.js";
import { StatusCodes } from "http-status-codes";
import { clubService } from "../services/club.js";

const getAllClub = async (req, res) => {
  try {
    const club = await clubService.getAllClub({});
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: club });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ Error: "Lỗi Server" });
  }
};

const getClub = async (req, res) => {
  try {
    const id = req.query.id;
    const club = await clubService.getClub(id);
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: club });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ Error: "Lỗi Server" });
  }
};

const getClubBySlug = async (req, res) => {
  try {
    const slug = req.params.slug;
    const club = await clubService.getClubBySlug({ slug });
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: club });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ Error: "Server Error" });
  }
};

const createClub = async (req, res) => {
  try {
    const { name, slug, banner, nickname, establish, stadium, productId } =
      req.body;
    const fileData = req.file;
    // console.log(fileData);
    const { error } = clubValidation.validate(req.boy, { abortEarly: false });
    if (error) {
      console.log("Validation Error:", error);
      const errorDetails = convertJoiError(error);
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ error: errorDetails, customMessage: "Invalid Input" });
    }
    const club = await clubService.createClub({
      name,
      nickname,
      slug,
      stadium,
      establish,
      banner: fileData?.path,
      productId,
    });
    return res
      .status(StatusCodes.CREATED)
      .json({ status: 201, message: "Xử lý thành công", content: club });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ Error: "Lỗi Server" });
  }
};

const createImageClub = async (req, res) => {
  try {
    const id = req.query.id;
    const files = req.files;
    if (!files || files.length === 0) {
      return res.status(400).json({ message: "Không có tệp ảnh được tải lên" });
    }
    const images = files.map((file) => file.path);
    const createImg = await clubService.createImageClub(id, {
      image: images,
    });
    return res
      .status(StatusCodes.CREATED)
      .json({ status: 201, message: "Xử lý thành công", content: createImg });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ Error: "Lỗi server" });
  }
};

const updateClub = async (req, res) => {
  try {
    const id = req.query.id;
    const { name, slug, banner, image, nickname, establish, stadium } =
      req.body;
    const { error } = clubValidation.validate(req.body, { aboutEarly: false });
    if (error) {
      console.log("Validation Error", error);
      const errorDetails = convertJoiError(error);
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ error: errorDetails, customMessage: "Invalid Input" });
    }
    const club = await clubService.updateClub(id, req.body);
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: club });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ Error: "Lỗi Server" });
  }
};

const deleteClub = async (req, res) => {
  try {
    const id = req.query.id;
    const club = await clubService.deleteclub(id);
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: club });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ Error: "Lỗi Server" });
  }
};

export const clubController = {
  getAllClub,
  getClub,
  getClubBySlug,
  createClub,
  createImageClub,
  updateClub,
  deleteClub,
};
