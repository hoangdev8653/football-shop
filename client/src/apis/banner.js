import { axiosConfig } from "../axiosConfig";

export const createBanner = async (data) => {
  return await axiosConfig({
    method: "post",
    url: "banner/create",
    data,
  });
};

export const getAllBanner = async () => {
  return await axiosConfig({
    method: "get",
    url: "banner",
  });
};

export const updateBanner = async (id, data) => {
  return await axiosConfig({
    method: "put",
    url: `banner/update?id=${id}`,
    data,
  });
};

export const deleteBanner = async (id) => {
  return await axiosConfig({
    method: "delete",
    url: `banner/delete?id=${id}`,
  });
};
