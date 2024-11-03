import StatusCodes from "http-status-codes";
import { bannerService } from "../services/banner.js";

const getAllBanner = async (req, res, next) => {
  try {
    const banner = await bannerService.getAllBanner();
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: banner });
  } catch (error) {
    console.log(error);
    next(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
  }
};

const createBanner = async (req, res, next) => {
  try {
    const { title } = req.body;
    const fileData = req.file;
    const banner = await bannerService.createBanner({
      title,
      image: fileData?.path,
    });
    return res
      .status(StatusCodes.CREATED)
      .json({ status: 201, message: "Xử lý thành công", content: banner });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
  }
};

const deleteBanner = async (req, res, next) => {
  try {
    const id = req.query.id;
    const banner = await bannerService.deleteBanner(id);
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: banner });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
  }
};

export const bannerController = {
  getAllBanner,
  createBanner,
  deleteBanner,
};
