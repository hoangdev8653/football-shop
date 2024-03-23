import axios from "axios";
import { BASE_URL } from "./utils/constants";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";

export const axiosConfig = axios.create({
  baseURL: BASE_URL,
});

axiosConfig.interceptors.request.use(
  function (config) {
    const accessToken = getLocalStorage("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    console.log(error.message);
    return Promise.reject(error);
  }
);
axiosConfig.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    // If the error status is 401 and there is no originalRequest._retry flag,
    // it means the token has expired and we need to refresh it
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = getLocalStorage("refreshToken");
        const response = await axios.post(
          "http://localhost:3007/user/refresh-token",
          {
            refreshToken,
          }
        );
        const accessToken = response.data.newToken.accessToken;
        setLocalStorage("accessToken", accessToken);
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return axios(originalRequest);
      } catch (error) {
        // refreshToken is Required
        console.log(error.message);
      }
    }

    return Promise.reject(error);
  }
);
