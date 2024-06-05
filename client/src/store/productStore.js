import { create } from "zustand";
import {
  getProductByKey,
  getProductBySlug,
  getProductClub,
  getProductFromVn,
  getProductNation,
  getProductNoLogo,
  getProductPretty,
  addProductWhishList,
  getProductWhishList,
  deleteProductWhishList,
} from "../apis/product";

export const productStore = create((set) => ({
  data: null,
  error: null,
  isLoading: false,
  stockQuality: 0,

  getProductByKey: async (key) => {
    try {
      set({ isLoading: true });
      const response = await getProductByKey(key);
      set({ isLoading: false, data: response.data.content });
    } catch (error) {
      console.log(error);
      set({ isLoading: false, error: error.message });
    }
  },
  getProductBySlug: async (slug) => {
    try {
      set({ isLoading: true, error: null });
      const response = await getProductBySlug(slug);
      set({
        isLoading: false,
        data: response.data.content,
        stockQuality: response.data.content.stockQuality,
      });
    } catch (error) {
      console.log(error);
      set({ isLoading: false, error: error.message });
    }
  },
  getProductClub: async () => {
    try {
      set({ isLoading: true });
      const response = await getProductClub();
      set({ isLoading: false, data: response.data.content });
    } catch (error) {
      console.log(error);
      set({ isLoading: false, error: error.message });
    }
  },
  getProductFromVn: async () => {
    try {
      set({ isLoading: true });
      const response = await getProductFromVn();
      set({ isLoading: false, data: response.data.content });
    } catch (error) {
      console.log(error);
      set({ isLoading: false, error: error.message });
    }
  },
  getProductNation: async () => {
    try {
      set({ isLoading: true });
      const response = await getProductNation();
      set({ isLoading: false, data: response.data.content });
    } catch (error) {
      console.log(error);
      set({ isLoading: false, error: error.message });
    }
  },
  getProductNoLogo: async () => {
    try {
      set({ isLoading: true });
      const response = await getProductNoLogo();
      set({ isLoading: false, data: response.data.content });
    } catch (error) {
      console.log(error);
      set({ isLoading: false, error: error.message });
    }
  },
  getProductPretty: async () => {
    try {
      set({ isLoading: true });
      const response = await getProductPretty();
      set({ isLoading: false, data: response.data.content });
    } catch (error) {
      console.log(error);
      set({ isLoading: false, error: error.message });
    }
  },

  getProductWhishList: async () => {
    try {
      set({ isLoading: true });
      const response = await getProductWhishList();
      if (response.status === 200) {
        set((state) => ({
          isLoading: false,
          data: response.data.content,
        }));
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },

  addProductWhishList: async (data) => {
    try {
      console.log({ data });
      set({ isLoading: true });
      const response = await addProductWhishList(data);
      console.log(response.data);
      if (response.status === 201) {
        set({ isLoading: false });
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },

  deleteProductWhishList: async (id) => {
    try {
      set({ isLoading: true });
      const response = await deleteProductWhishList(id);
      console.log(response);
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
