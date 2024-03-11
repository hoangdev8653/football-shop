import axios from "axios";
import { BASE_URL } from "./utils/constants";

export const axiosConfig = axios.create({
  baseURL: BASE_URL,
});

axiosConfig.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    console.log(error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosConfig.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log("Thất bại");
    console.log(error.message);
    return error;
    // return Promise.reject(error);
  }
);
