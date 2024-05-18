import { create } from "zustand";
import { addProduct, createCheckout, deleteProduct } from "../apis/cart";

export const cartStore = create((set) => ({
  data: null,
  error: null,
  isLoading: false,

  addProduct: async (data) => {
    try {
      set({ isLoading: true });
      await addProduct(data);
      set({ isLoading: false });
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },

  deleteProduct: async (productId) => {
    try {
      set({ isLoading: true });
      await deleteProduct(productId);
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },
  createCheckout: async (address) => {
    try {
      set({ isLoading: true });
      await createCheckout(address);
      set({ isLoading: false });
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },
}));
