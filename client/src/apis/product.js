import { axiosConfig } from "../axiosConfig";

export const createProduct = async (data) => {
  return await axiosConfig({
    method: "post",
    url: "/product/create",
    data,
  });
};

export const getAllProduct = async () => {
  return await axiosConfig({
    method: "get",
    url: "product",
  });
};

export const getProductClub = async () => {
  return await axiosConfig({
    method: "get",
    url: "/product/ao-bong-da-clb",
  });
};

export const getProductNoLogo = async () => {
  return await axiosConfig({
    method: "get",
    url: "/product/ao-bong-da-khong-logo",
  });
};

export const getProductNation = async () => {
  return await axiosConfig({
    method: "get",
    url: "/product/ao-bong-da-doi-tuyen",
  });
};

export const getProductPretty = async () => {
  return await axiosConfig({
    method: "get",
    url: "/product/ao-dep-nhat",
  });
};

export const getProductFromVn = async () => {
  return await axiosConfig({
    method: "get",
    url: "/product/ao-bong-da-clb-vn",
  });
};

export const getProductBySlug = async (slug) => {
  return await axiosConfig({
    method: "get",
    url: `/product/detail/${slug}`,
  });
};

export const getProductByKey = async (key) => {
  return await axiosConfig({
    method: "get",
    url: `/product/search/?s=${key}`,
  });
};

export const getProductWhishList = async () => {
  return await axiosConfig({
    method: "get",
    url: "/whishList/getByUser",
  });
};

export const getProductAccessory = async (productId) => {
  return await axiosConfig({
    method: "get",
    url: "/product/phu-kien",
  });
};

export const addProductWhishList = async (data) => {
  return await axiosConfig({
    method: "post",
    url: "/whishList/addProduct",
    data: { productId: data },
  });
};

export const updateProduct = async (id, data) => {
  return await axiosConfig({
    method: "put",
    url: `product/update?id=${id}`,
    data,
  });
};

export const deleteProductWhishList = async (productId) => {
  return await axiosConfig({
    method: "delete",
    url: `/whishList/deleteProduct?id=${productId}`,
  });
};

export const deleteProduct = async (id) => {
  return await axiosConfig({
    method: "delete",
    url: `/product/delete?id=${id}`,
  });
};
