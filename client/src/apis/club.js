import { axiosConfig } from "../axiosConfig";

export const getAllClub = async () => {
  return axiosConfig({
    method: "get",
    url: "/club",
  });
};

export const getClubBySlug = async (slug) => {
  return axiosConfig({
    method: "get",
    url: `/club/detail/${slug}`,
  });
};
