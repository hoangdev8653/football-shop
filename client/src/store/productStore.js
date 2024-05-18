import { create } from "zustand";
import {
  getProductByKey,
  getProductBySlug,
  getProductClub,
  getProductFromVn,
  getProductNation,
  getProductNoLogo,
  getProductPretty,
} from "../apis/product";

export const productStore = create((set) => ({
  data: null,
  error: null,
  isLoading: false,

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
      set({ isLoading: true });
      const response = await getProductBySlug(slug);
      set({ isLoading: false, data: response.data.content });
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
}));
