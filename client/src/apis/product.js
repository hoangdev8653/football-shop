import { axiosConfig } from "../axiosConfig";

export const getProductClub = async () => {
  return axiosConfig({
    method: "get",
    url: "/product/ao-bong-da-clb",
  });
};
