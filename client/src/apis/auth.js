import { axiosConfig } from "../axiosConfig";

export const register = async (data) => {
  return await axiosConfig({
    method: "post",
    url: "/user/dang-ki",
    data,
  });
};

export const login = async (data) => {
  return await axiosConfig({
    method: "post",
    url: "/user/dang-nhap",
    data,
  });
};

export const logout = async () => {
  return await axiosConfig({
    method: "post",
    url: "user/logout",
  });
};

export const getUserCurrent = async () => {
  return await axiosConfig({
    method: "get",
    url: "/user/ca-nhan",
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
  });
};

export const updateUserByAdmin = async (id, data) => {
  return await axiosConfig({
    method: "put",
    url: `/user/updateUserByAdmin?id=${id}`,
    data,
  });
};

export const getHistoryOrder = async (token) => {
  return await axiosConfig({
    method: "get",
    url: "/order/getOrderById",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const forgotPassword = async (data) => {
  return await axiosConfig({
    method: "post",
    url: "/user/forgot-password",
    data,
  });
};

export const resetPassword = async (data, token) => {
  return await axiosConfig({
    method: "patch",
    url: `/user/reset-password?token=${token}`,
    data,
  });
};

export const getAllUser = async () => {
  return await axiosConfig({
    method: "get",
    url: "/user",
  });
};

export const deleteUser = async (id) => {
  return await axiosConfig({
    method: "delete",
    url: `user/delete?id=${id}`,
  });
};
