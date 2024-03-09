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

export const getUserById = async (id) => {
  return axiosConfig({
    method: "get",
    url: `user/findOne?id=${id}`,
  });
};

export const AUTH_API = {
  register,
  login,
};
