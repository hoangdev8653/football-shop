import { axiosConfig } from "../axiosConfig";

export const getProductClub = async () => {
  return axiosConfig({
    method: "get",
    url: "/product/ao-bong-da-clb",
  });
};

export const getProductNoLogo = async () => {
  return axiosConfig({
    method: "get",
    url: "/product/ao-bong-da-khong-logo",
  });
};

export const getProductNation = async () => {
  return axiosConfig({
    method: "get",
    url: "/product/ao-bong-da-doi-tuyen",
  });
};

export const getProductPretty = async () => {
  return axiosConfig({
    method: "get",
    url: "/product/ao-dep-nhat",
  });
};

export const getProductFromVn = async () => {
  return axiosConfig({
    method: "get",
    url: "/product/ao-bong-da-clb-vn",
  });
};

export const getProductBySlug = async (slug) => {
  return axiosConfig({
    method: "get",
    url: `product/detail/${slug}`,
  });
};
