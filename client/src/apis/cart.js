import { axiosConfig } from "../axiosConfig";

export const addProduct = async (data, token) => {
  return await axiosConfig({
    url: "/user/createCart",
    method: "post",
    data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteProduct = async (productId, token) => {
  console.log(productId);
  return await axiosConfig({
    url: `/user/deleteCart?productId=${productId}`,
    method: "delete",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};
