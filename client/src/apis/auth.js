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

export const AUTH_API = {
  register,
  login,
};
