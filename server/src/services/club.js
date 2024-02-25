import ClubModel from "../models/club.js";

const getAllClubService = async () => {
  return await ClubModel.find({}).populate(
    "productId",
    "name price image slug -_id "
  );
};

const getClubService = async (id) => {
  try {
    const club = await ClubModel.findById(id);
    if (!club) {
      throw new { Error: "Không tồn tại " }();
    }
    return await ClubModel.findByIdAndUpdate(id);
  } catch (error) {
    console.log(error);
  }
};

const createClubService = async ({
  name,
  nickname,
  slug,
  stadium,
  banner,
  establish,
  productId,
}) => {
  try {
    const club = await ClubModel.findOne({ name });
    if (club) {
      throw { Error: "Đã tồn tại" };
    }
    return await ClubModel.create({
      name,
      nickname,
      slug,
      stadium,
      banner,
      establish,
      productId,
    });
  } catch (error) {
    console.log(error);
  }
};

const createImageClubService = async (id, { image }) => {
  try {
    const club = await ClubModel.findById(id);
    if (!club) {
      throw new Error({ message: "Không tồn tại" });
    }
    return await ClubModel.findByIdAndUpdate(id, { image }, { new: true });
  } catch (error) {
    console.log(error.message);
  }
};

const updateClubService = async (id) => {
  try {
    const club = await ClubModel.findById(id);
    if (!club) {
      throw new { Error: "Không tồn tại" }();
    }
    return await ClubModel.findByIdAndUpdate(id, {}, { new: true });
  } catch (error) {
    console.log(error);
  }
};

const deleteClubService = async (id) => {
  try {
    const club = await ClubModel.findById(id);
    if (!club) {
      throw new { Error: "Không tồn tại " }();
    }
    return await ClubModel.deleteOne({ _id: id });
  } catch (error) {
    console.log(error);
  }
};

export {
  getAllClubService,
  getClubService,
  createClubService,
  createImageClubService,
  updateClubService,
  deleteClubService,
};
