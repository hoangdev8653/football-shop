import BannerModel from "../models/banner.js";

const getAllBanner = async () => {
  return await BannerModel.find();
};

const createBanner = async ({ title, image }) => {
  try {
    return await BannerModel.create({ title, image });
  } catch (error) {
    console.log(error);
  }
};

const deleteBanner = async (id) => {
  try {
    const banner = await BannerModel.findById(id);
    if (!banner) {
      throw Error("Banner Not Found");
    }
    return await BannerModel.deleteOne({ _id: id });
  } catch (error) {
    console.log(error);
  }
};

export const bannerService = {
  getAllBanner,
  createBanner,
  deleteBanner,
};
