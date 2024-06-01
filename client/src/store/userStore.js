import { create } from "zustand";
import {
  getHistoryOrder,
  getUserById,
  getUserCurrent,
  login,
  logout,
  register,
  forgotPassword,
  resetPassword,
  updatePassword,
  updateUser,
} from "../apis/auth";
import { setLocalStorage } from "../utils/LocalStorage";
import { toast } from "react-toastify";

export const userStore = create((set) => ({
  user: null,
  error: null,
  isLoading: false,
  navigate: "",

  register: async (data) => {
    try {
      set({ isLoading: true });
      const response = await register(data);
      if (response.status === 201) {
        set({ isLoading: true });
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },
  login: async (data, navigate) => {
    try {
      set({ isLoading: true });
      const response = await login(data);
      if (response.status === 200) {
        set({ isLoading: false });
        toast.success("Đăng nhập thành công");
        set({ user: response.data.content });
        setLocalStorage("user", response.data.content);
        setLocalStorage("accessToken", response.data.accessToken);
        setLocalStorage("refreshToken", response.data.refreshToken);
        set({ navigate: "/" });
        navigate("/");
      } else if (response.status === 500) {
        set({ isLoading: false });
        set({ navigate: "/login" });
        set({ error: "Unexpected response status: " + response.status });
      }
    } catch (error) {
      set({ isLoading: false });
      set({ error: error.message });
      console.log(error);
      toast.error("Mật Khẩu hoặc tài khoản không đúng");
    }
  },

  logout: async () => {
    try {
      set({ isLoading: true });
      const response = await logout();
      if (response.status === 200) {
        set({ isLoading: false });
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },
  getUserCurrent: async () => {
    try {
      set({ isLoading: true });
      const response = await getUserCurrent();
      if (response.status === 200) {
        set({ user: response.data.content });
        set({ isLoading: false });
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },
  getUserById: async (id) => {
    try {
      set({ isLoading: true });
      const response = await getUserById();
      if (response.status === 200) {
        set({ isLoading: false });
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },
  updateUser: async (data) => {
    try {
      set({ isLoading: true });
      const response = await updateUser(data);
      if (response.status === 200) {
        console.log(response);
        const updatedUser = {
          id: response.data.content._id,
          email: response.data.content.email,
          image: response.data.content.image,
          phone: response.data.content.phone,
          username: response.data.content.username,
        };
        setLocalStorage("user", updatedUser);
        set({ isLoading: false });
        // window.location.reload();
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },
  updatePassword: async (data, token) => {
    try {
      set({ isLoading: true });
      const response = await updatePassword(data, token);
      if (response.status === 200) {
        set({ isLoading: false });
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },
  getHistoryOrder: async (token) => {
    try {
      set({ isLoading: true });
      const response = await getHistoryOrder(token);
      if (response.status === 200) {
        set({ user: response.data.content });
        set({ isLoading: false });
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },
  forgotPassword: async (data) => {
    try {
      set({ isLoading: true });
      const response = await forgotPassword(data);
      if (response.status === 200) {
        set({ isLoading: false });
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },
  resetPassword: async (data, token) => {
    try {
      set({ isLoading: true });
      const response = await resetPassword(data, token);
      if (response.status === 200) {
        set({ isLoading: false });
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },
}));
