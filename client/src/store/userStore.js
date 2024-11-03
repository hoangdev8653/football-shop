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
  updateUserByAdmin,
  deleteUser,
  getAllUser,
} from "../apis/auth";
import { setLocalStorage } from "../utils/LocalStorage";
import { toast } from "react-toastify";

export const userStore = create((set) => ({
  user: [],
  error: null,
  isLoading: false,

  getAllUser: async () => {
    try {
      set({ isLoading: true });
      const response = await getAllUser();
      if (response.status === 200) {
        set({ isLoading: false });
        set({ user: response.data.content });
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },

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

  login: async (data) => {
    try {
      set({ isLoading: true });
      const response = await login(data);
      if (response.status === 200) {
        toast.success("Đăng nhập thành công");

        // Lưu thông tin người dùng và token vào localStorage
        setLocalStorage("user", response.data.content);
        setLocalStorage("accessToken", response.data.accessToken);
        setLocalStorage("refreshToken", response.data.refreshToken);

        // Trả về role khi đăng nhập thành công
        return { role: response.data.content.role, error: null };
      } else {
        set({ isLoading: false });
        const errorMsg = "Unexpected response status: " + response.status;
        set({ error: errorMsg });
        return { role: null, error: errorMsg };
      }
    } catch (error) {
      set({ isLoading: false });
      set({ error: error.message });
      toast.error("Tài khoản hoặc mật khẩu không đúng");
      return { role: null, error: error.message };
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

  updateUserByAdmin: async (id, values) => {
    try {
      set({ isLoading: true });
      const response = await updateUserByAdmin(id, values);
      if (response.status === 200) {
        set((state) => {
          const updatedUsers = state.user.map((user) =>
            user.id === id ? { ...user, ...response.data.content } : user
          );
          return { user: updatedUsers, isLoading: false };
        });
        toast.success("Cập nhật thành công");
      } else {
        toast.error("Cập nhật thất bại");
      }
      return null;
    } catch (error) {
      toast.error("Cập nhật thất bại");
      console.log(error.message);
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
