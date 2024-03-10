import { axiosConfig } from "../axiosConfig";

export const addProduct = async (data, token) => {
  console.log(data);
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
  return await axiosConfig({
    url: `user/deteleCart?productId=${productId}`,
    method: "delete",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};
