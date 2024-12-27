import ClubModel from "../models/club.js";

const getAllClub = async () => {
  return await ClubModel.find({}).populate(
    "productId",
    "name price image slug _id"
  );
};

const getClub = async (id) => {
  try {
    const club = await ClubModel.findById(id).populate(
      "productId",
      "name price image slug _id "
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
  const club = await ClubModel.findOne({ slug }).populate(
    "productId",
    "name price image slug _id "
  );

  if (!club) {
    throw Error("Not found");
  }
  return await club;
};

const createClub = async ({
  name,
  nickname,
  slug,
  stadium,
  banner,
  logo,
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
      logo,
      establish,
      productId,
    });
  } catch (error) {
    console.log(error);
  }
};

const addProductToClub = async (id, productIds) => {
  try {
    const club = await ClubModel.findById(id).populate(
      "productId",
      "name price image slug _id "
    );
    if (!club) {
      throw Error("Club Not Found");
    }
    const product = club.productId.findIndex(
      (item) => item._id.toString() === productIds.toString()
    );
    console.log(productIds);

    if (product !== -1) {
      throw Error("Product already exists");
    } else {
      club.productId.push(productIds);
      return await club.save();
    }
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
  addProductToClub,
  deleteclub,
};
