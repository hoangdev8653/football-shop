import { axiosConfig } from "../axiosConfig";

export const getAllClub = async () => {
  return axiosConfig({
    method: "get",
    url: "/club",
  });
};
