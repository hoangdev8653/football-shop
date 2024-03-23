import { axiosConfig } from "../axiosConfig";

const register = async (data) => {
  return await axiosConfig({
    method: "post",
    url: "/user/dang-ki",
    data,
  });
};

const login = async (data) => {
  return await axiosConfig({
    method: "post",
    url: "/user/dang-nhap",
    data,
  });
};

export const getUserCurrent = async (token) => {
  return await axiosConfig({
    method: "get",
    url: "/user/ca-nhan",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getUserById = async (id) => {
  return await axiosConfig({
    method: "get",
    url: `/user/findOne?id=${id}`,
  });
};

export const updateUser = async (data, token) => {
  return await axiosConfig({
    method: "post",
    url: `/user/update`,
    data,
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updatePassword = async (data, token) => {
  return await axiosConfig({
    method: "post",
    url: `/user/changePassword`,
    data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getHistoryOrder = async (token) => {
  return await axiosConfig({
    method: "get",
    url: `/order/getOrderById`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const AUTH_API = {
  register,
  login,
};
