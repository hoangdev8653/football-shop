import { create } from "zustand";
import {
  createCategory,
  getAllCategory,
  updateCategory,
  deleteCategory,
} from "../apis/category";

export const categoryStore = create((set) => ({
  data: [],
  error: null,
  isLoading: false,

  createCategory: async (data) => {
    try {
      set({ isLoading: true });
      const response = await createCategory(data);
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

  getAllCategory: async () => {
    try {
      set({ isLoading: true });
      const response = await getAllCategory();
      if (response.status === 200) {
        set({ data: response.data.content });
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },

  updateCategory: async (id, data) => {
    try {
      set({ isLoading: true });
      const response = await updateCategory(id, data);
      if (response.status === 200) {
        set({ isLoading: false });
        set({ data: response.data.content });
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },

  deleteCategory: async (id) => {
    try {
      set({ isLoading: true });
      const response = await deleteCategory(id);
      if (response.status === 200) {
        set((state) => ({
          isLoading: false,
          data: state.data.filter((item) => item.id !== id),
        }));
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },
}));
