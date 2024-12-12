import { axiosConfig } from "../axiosConfig";

export const createClub = async (data) => {
  return await axiosConfig({
    method: "post",
    url: "club/create",
    data,
  });
};

export const getAllClub = async () => {
  return await axiosConfig({
    method: "get",
    url: "/club",
  });
};

export const getClubById = async (id) => {
  return await axiosConfig({
    method: "get",
    url: `club/findById?id=${id}`,
  });
};

export const getClubBySlug = async (slug) => {
  return await axiosConfig({
    method: "get",
    url: `/club/${slug}`,
  });
};

export const updateClub = async (id, data) => {
  return await axiosConfig({
    method: "put",
    url: `club/update?id=${id}`,
    data,
  });
};

export const deleteClub = async (id) => {
  return await axiosConfig({
    method: "delete",
    url: `club/delete?id=${id}`,
  });
};
