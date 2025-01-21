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
    const {
      name,
      slug,
      banner,
      logo,
      nickname,
      establish,
      stadium,
      productId,
    } = req.body;
    const bannerFile = req.files["banner"] ? req.files["banner"][0] : null;
    const logoFile = req.files["logo"] ? req.files["logo"][0] : null;

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
      banner: bannerFile?.path,
      logo: logoFile?.path,
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

const addProductToClub = async (req, res) => {
  try {
    const id = req.query.id;
    const { productIds } = req.body;
    const club = await clubService.addProductToClub(id, productIds);
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
  addProductToClub,
  deleteClub,
};
