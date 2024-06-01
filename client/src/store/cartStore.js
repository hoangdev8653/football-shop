import { create } from "zustand";
import { addProduct, deleteProduct } from "../apis/cart";
import { getUserCurrent } from "../apis/auth";
export const cartStore = create((set) => ({
  data: [],
  error: null,
  isLoading: false,
  totalValue: 0,
  totalPrice: 0,

  fetchCart: async () => {
    try {
      set({ isLoading: true });
      const response = await getUserCurrent();
      set({ data: response.data.content.cart, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },

  addProduct: async (productData) => {
    try {
      set({ isLoading: true });
      const response = await addProduct(productData);
      set((state) => ({
        data: response.data.content.cart, // Update cart data with the new data from response
        isLoading: false,
        error: null,
      }));
    } catch (error) {
      console.log(error);
      set({ error: error.message, isLoading: false });
    }
  },

  deleteProduct: async (productId) => {
    try {
      set({ isLoading: true });
      const response = await deleteProduct(productId);
      console.log(response);
      set((state) => ({
        data: state.data.filter((item) => item.productId._id !== productId),
        isLoading: false,
        error: null,
      }));
    } catch (error) {
      console.log(error);
      set({ error: error.message, isLoading: false });
    }
  },
}));
