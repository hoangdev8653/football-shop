import { axiosConfig } from "../axiosConfig";

export const getAllBlog = async () => {
  return axiosConfig({
    method: "get",
    url: "/blog",
  });
};
