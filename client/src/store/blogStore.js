import { create } from "zustand";
import { getAllBlog } from "../apis/blog";

export const blogStore = create((set) => ({
  data: null,
  error: null,
  isLoading: false,

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
}));
