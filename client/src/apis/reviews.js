import { axiosConfig } from "../axiosConfig";

export const getReviewsByProduct = async (productId) => {
  return axiosConfig({
    method: "get",
    url: `/review?productId=${productId}`,
  });
};

export const createReview = async (data, token) => {
  return axiosConfig({
    method: "post",
    url: "/review/create",
    data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateReview = async (productId, token) => {
  return axiosConfig({
    method: "put",
    url: `/review/update/productId=${productId}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteReview = async (productId, token) => {
  return axiosConfig({
    method: "delete",
    url: `/review/delete/productId=${productId}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};
