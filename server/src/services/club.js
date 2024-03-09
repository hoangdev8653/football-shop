import ClubModel from "../models/club.js";

const getAllClub = async () => {
  return await ClubModel.find({}).populate(
    "productId",
    "name price image slug -_id "
  );
};

const getClub = async (id) => {
  try {
    const club = await ClubModel.findById(id).populate(
      "productId",
      "name price image slug -_id "
    );
    if (!club) {
      throw new { Error: "Không tồn tại " }();
    }
    return await club;
  } catch (error) {
    console.log(error);
  }
};

const getClubBySlug = async ({ slug }) => {
  const exits = await ClubModel.findOne({ slug }).populate(
    "productId",
    "name price image slug -_id "
  );
  if (!exits) {
    throw Error("Not found");
  }
  return await exits;
};

const createClub = async ({
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

const createImageClub = async (id, { image }) => {
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

const updateClub = async (id) => {
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

const deleteclub = async (id) => {
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

export const clubService = {
  getAllClub,
  getClub,
  getClubBySlug,
  createClub,
  createImageClub,
  updateClub,
  deleteclub,
};
