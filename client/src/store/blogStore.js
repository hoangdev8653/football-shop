import { create } from "zustand";
import { getAllBlog, createBlog, deleteBlog, updateBlog } from "../apis/blog";

export const blogStore = create((set) => ({
  data: [],
  error: null,
  isLoading: false,

  createBlog: async (data) => {
    try {
      set({ isLoading: true });
      const response = await createBlog(data);
      if (response.status === 201) {
        set((state) => ({
          isLoading: false,
          data: [...state.data, response.data.content],
        }));
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },

  getAllBlog: async () => {
    try {
      set({ isLoading: true });
      const response = await getAllBlog();
      set({ isLoading: false });
      if (response.status === 200) {
        set({ data: response.data.content });
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },

  updateBlog: async (id, data) => {
    try {
      set({ isLoading: true });
      const response = await updateBlog(id, data);
      if (response.status === 200) {
        set({ isLoading: false });
        set({ data: response.data.content });
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },

  deleteBlog: async (id) => {
    try {
      set({ isLoading: true });
      const response = await deleteBlog(id);
      if (response.status === 200) {
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
