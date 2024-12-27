import { axiosConfig } from "../axiosConfig";

export const addProductToCart = async (data) => {
  return await axiosConfig({
    url: "/user/createCart",
    method: "post",
    data,
  });
};

export const deleteProductToCart = async (productId) => {
  return await axiosConfig({
    url: `/user/deleteCart?productId=${productId}`,
    method: "delete",
  });
};

export const updateQuantityCart = async (products) => {
  return await axiosConfig({
    url: "/user/updateCart",
    method: "put",
    data: { products },
  });
};

export const createCheckout = async (address) => {
  return await axiosConfig({
    url: "/order/create",
    method: "post",
    data: address,
  });
};
