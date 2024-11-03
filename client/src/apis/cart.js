import { axiosConfig } from "../axiosConfig";

export const addProduct = async (data) => {
  console.log(data);
  return await axiosConfig({
    url: "/user/createCart",
    method: "post",
    data,
  });
};

export const deleteProduct = async (productId) => {
  return await axiosConfig({
    url: `/user/deleteCart?productId=${productId}`,
    method: "delete",
  });
};

export const createCheckout = async (address) => {
  return await axiosConfig({
    url: "/order/create",
    method: "post",
    data: address,
  });
};
