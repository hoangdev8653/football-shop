import axios from "../axios";

const register = async (data) => {
  axios({
    method: "post",
    url: "/register",
    data,
  });
};

const login = async (data) => {
  axios({
    method: "post",
    url: "/login",
    data,
  });
};

export const AUTH_API = {
  register,
  login,
};
