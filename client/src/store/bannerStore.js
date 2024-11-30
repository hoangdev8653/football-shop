import { create } from "zustand";
import {
  createBanner,
  deleteBanner,
  getAllBanner,
  updateBanner,
} from "../apis/banner";
import { toast } from "react-toastify";

export const bannerStore = create((set) => ({
  data: [],
  error: null,
  isLoading: false,

  createBanner: async (data) => {
    try {
      set({ isLoading: true });
      const response = await createBanner(data);
      if (response.status === 201) {
        toast.success("Thêm mới thành công");
        set((state) => ({
          isLoading: false,
          data: [...state.data, response.data.content],
        }));
      }
    } catch (error) {
      console.log(error);
      toast.error("Thêm mới thất bại");
      set({ error: error.message });
    }
  },

  getAllBanner: async () => {
    try {
      set({ isLoading: true });
      const response = await getAllBanner();
      if (response.status === 200) {
        set({ isLoading: false });
        set({ data: response.data.content });
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },

  updateBanner: async (id, data) => {
    try {
      set({ isLoading: true });
      const response = await updateBanner(id, data);
      if (response.status === 200) {
        set((state) => {
          const Banner = state.data.map((banner) =>
            data._id === id ? { ...data, ...response.data.content } : data
          );
          return { data: Banner, isLoading: false };
        });
        toast.success("Cập nhật thành công");
      } else {
        toast.error("Cập nhật thất bại");
      }
    } catch (error) {
      console.log(error.message);
      toast.error("Cập nhật thất bại");
      set({ error: error.message });
    }
  },

  deleteBanner: async (id) => {
    try {
      set({ isLoading: true });
      const response = await deleteBanner(id);
      if (response.status === 200) {
        toast.success("Xóa thành công");
        set((state) => ({
          isLoading: false,
          data: state.data.filter((item) => item._id !== id),
        }));
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },
}));
