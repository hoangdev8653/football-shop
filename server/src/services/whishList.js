import whishListModel from "../models/whishList.js";

const getWhishListByUser = async (id) => {
  try {
    const product = await whishListModel
      .find({ userId: id })
      .populate("productId");
    return product;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const addWhishList = async (id, { productId }) => {
  try {
    const newProduct = await whishListModel.create({ userId: id, productId });
    return newProduct;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deleteWhishList = async (id) => {
  try {
    const product = await whishListModel.findById(id);
    if (!product) {
      throw { error: "Product Not Found" };
    }
    return await whishListModel.deleteOne({ _id: id });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const whishListService = {
  getWhishListByUser,
  addWhishList,
  deleteWhishList,
};
