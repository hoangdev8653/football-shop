import { axiosConfig } from "../axiosConfig";

const register = async (data) => {
  return axiosConfig({
    method: "post",
    url: "/register",
    data,
  });
};

const login = async (data) => {
  return axiosConfig({
    method: "post",
    url: "/user/dang-nhap",
    data,
  });
};

export const getUserCurrent = async (token) => {
  return axiosConfig({
    method: "get",
    url: "/user/ca-nhan",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getUserById = async (id) => {
  return axiosConfig({
    method: "get",
    url: `/user/findOne?id=${id}`,
  });
};

export const updateUser = async (data, token) => {
  return axiosConfig({
    method: "post",
    url: `/user/update`,
    data,
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
