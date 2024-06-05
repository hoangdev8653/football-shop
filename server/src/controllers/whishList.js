import { StatusCodes } from "http-status-codes";
import { whishListService } from "../services/whishList.js";

const getWhishListByUser = async (req, res) => {
  try {
    const id = req.userId;
    const product = await whishListService.getWhishListByUser(id);
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: product });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
  }
};

const addWhishList = async (req, res) => {
  try {
    const id = req.userId;
    const { productId } = req.body;
    const product = await whishListService.addWhishList(id, { productId });
    return res
      .status(StatusCodes.CREATED)
      .json({ status: 201, message: "Xử lý thành công", content: product });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
  }
};

const deleteWhishList = async (req, res) => {
  try {
    const id = req.query.id;
    const product = await whishListService.deleteWhishList(id);
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: product });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Erorr" });
  }
};

export const whishListController = {
  getWhishListByUser,
  addWhishList,
  deleteWhishList,
};
