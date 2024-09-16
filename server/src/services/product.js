import ProductModel from "../models/product.js";
const getAllProduct = async () => {
  const products = await ProductModel.find({}).populate(
    "categoryId",
    "name slug -_id"
  );
  return products;
};

const getProductBySlug = async ({ slug }) => {
  try {
    const product = await ProductModel.findOne({ slug });
    if (!product) {
      throw new Error("Product Not Found");
    }

    return product;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getProductByKey = async ({ name }) => {
  const products = await ProductModel.find({ name });
  const productsLength = products.length;
  if (!products || products.length === 0) {
    return { error: true, message: "Không tìm thấy sản phẩm" };
  }
  return { products, productsLength };
};

const getProductByPages = async (startIndex, perPage) => {
  return await ProductModel.find({}).skip(startIndex).limit(perPage);
};

const getProductClub = async () => {
  const products = await ProductModel.find({}).populate(
    "categoryId",
    "name slug -_id"
  );
  const ProductClub = products.filter(
    (product) => product.categoryId.slug === "ao-cau-lac-bo"
  );
  return ProductClub;
};

const getProductNation = async () => {
  const products = await ProductModel.find({}).populate(
    "categoryId",
    "name slug -_id"
  );
  const ProductNation = products.filter(
    (product) => product.categoryId.slug === "ao-doi-tuyen"
  );
  return ProductNation;
};

const getProductNoLogo = async () => {
  const products = await ProductModel.find({}).populate(
    "categoryId",
    "name slug -_id"
  );
  const ProductNoLogo = products.filter(
    (product) => product.categoryId.slug === "ao-khong-logo"
  );
  return ProductNoLogo;
};

const getProductFromVN = async () => {
  const products = await ProductModel.find({}).populate(
    "categoryId",
    "name slug -_id"
  );
  const getProductFromVN = products.filter(
    (product) => product.categoryId.slug === "ao-bong-da-clb-vn"
  );
  return getProductFromVN;
};

const getProductPretty = async () => {
  const products = await ProductModel.find({}).populate(
    "categoryId",
    "name slug -_id"
  );
  const getProductPerty = products.filter(
    (product) => product.categoryId.slug === "ao-doi-tuyen-dep-nhat"
  );
  return getProductPerty;
};

const getProductAccessory = async () => {
  const products = await ProductModel.find({}).populate(
    "categoryId",
    "name slug -_id"
  );
  const productAccessory = products.filter(
    (product) => product.categoryId.slug === "phu-kien"
  );
  return productAccessory;
};

const createProduct = async ({
  name,
  description,
  price,
  stockQuality,
  image,
  slug,
  categoryId,
}) => {
  const product = await ProductModel.findOne({ name });
  console.log({ name, description, price, stockQuality, slug });

  if (product) {
    throw { Error: "Đã tồn tại" };
  }
  return await ProductModel.create({
    name,
    description,
    price,
    stockQuality,
    image,
    slug,
    categoryId,
  });
};

const updateProduct = async (
  id,
  { name, description, price, stockQuality, slug, categoryId }
) => {
  const product = await ProductModel.findById(id);
  if (!product) {
    throw { Error: "Không tìm thấy sản phẩm" };
  }
  const newProduct = await ProductModel.findByIdAndUpdate(
    id,
    {
      name,
      description,
      price,
      stockQuality,
      slug,
      categoryId,
    },
    { new: true }
  );
  return newProduct;
};

const deleteProduct = async (id) => {
  const product = await ProductModel.findById(id);
  if (!product) {
    throw { Error: "Không tồn tại" };
  }
  return await ProductModel.deleteOne({ _id: id });
};

export const productService = {
  getAllProduct,
  getProductBySlug,
  getProductByKey,
  getProductByPages,
  getProductClub,
  getProductNation,
  getProductNoLogo,
  getProductAccessory,
  getProductFromVN,
  getProductPretty,
  createProduct,
  updateProduct,
  deleteProduct,
};
