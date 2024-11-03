import { StatusCodes } from "http-status-codes";
import { productService } from "../services/product.js";

const getAllProduct = async (req, res) => {
  try {
    const products = await productService.getAllProduct();
    return res.status(StatusCodes.OK).json({
      status: 200,
      message: "Xử lý thành công",
      content: products,
    });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes).json({ Error: "Lỗi server" });
  }
};

const getProductBySlug = async (req, res) => {
  try {
    const slug = req.params.slug;
    const product = await productService.getProductBySlug({ slug });
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: product });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ Error: "Server Error!" });
  }
};

const getProductByKey = async (req, res) => {
  try {
    const keySearch = req.query.s;
    const regex = new RegExp(keySearch, "i");
    const { products, productsLength } = await productService.getProductByKey({
      name: regex,
    });

    return res.status(StatusCodes.OK).json({
      status: 200,
      message: "Xử lý thành công",
      content: products ? products : null,
      total: productsLength ? productsLength : null,
    });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes).json({ Error: "Lỗi server" });
  }
};

const getProductByPages = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const perPage = parseInt(req.query.perPage) || 10;
    const startIndex = (page - 1) * perPage;
    const product = await productService.getProductByPages(startIndex, perPage);
    return res.status(StatusCodes.OK).json({
      status: 200,
      message: "Xử lý thành công",
      content: product,
    });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ Error: "Lỗi Server" });
  }
};

const getProductClub = async (req, res) => {
  try {
    const product = await productService.getProductClub();
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: product });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ Error: "Lỗi Server" });
  }
};

const getProductNation = async (req, res) => {
  try {
    const product = await productService.getProductNation();
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: product });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};
const getProductNoLogo = async (req, res) => {
  try {
    const product = await productService.getProductNoLogo();
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: product });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

const getProductAccessory = async (req, res) => {
  try {
    const product = await productService.getProductAccessory();
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: product });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ Error: "Lỗi Server" });
  }
};

const getProductFromVN = async (req, res) => {
  try {
    const product = await productService.getProductFromVN();
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: product });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ Error: "Lỗi Server" });
  }
};

const getProductPretty = async (req, res) => {
  try {
    const product = await productService.getProductPretty();
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: product });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ Error: "Lỗi Server" });
  }
};

const createProduct = async (req, res) => {
  try {
    const files = req.files;
    const { name, description, price, stockQuality, image, slug, categoryId } =
      req.body;
    const images = files.map((file) => file.path);
    const product = await productService.createProduct({
      name,
      description,
      price,
      stockQuality,
      image: images,
      slug,
      categoryId,
    });
    return res
      .status(StatusCodes.CREATED)
      .json({ status: 201, message: "Xử lý thành công", content: product });
  } catch (error) {
    console.log("error ", error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ Error: "Lỗi server" });
  }
};

const updateProduct = async (req, res) => {
  try {
    const id = req.query.id;
    console.log(id);
    const { name, description, price, stockQuality, slug, categoryId } =
      req.body;
    // const images = files?.map((file) => file.path);
    const product = await productService.updateProduct(id, {
      name,
      description,
      price,
      stockQuality,
      // image: images,
      slug,
      categoryId,
    });
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: product });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ Error: "Lỗi Server" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const id = req.query.id;
    const product = await productService.deleteProduct(id);
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: product });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ Error: "Lỗi Server" });
  }
};

export const productController = {
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
