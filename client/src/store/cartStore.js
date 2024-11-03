import { create } from "zustand";
import { addProduct, deleteProduct } from "../apis/cart";
import { getUserCurrent } from "../apis/auth";
import { toast } from "react-toastify";
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
      console.log(productData);
      set({ isLoading: true });
      const response = await addProduct(productData);
      console.log(response);

      set((state) => ({
        isLoading: false,
        data: [...state.data, response.data.content],
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
      if (response.status === 200) {
        toast.success("Xóa thành công");
        set((state) => ({
          data: state.data.filter((item) => item.productId._id !== productId),
          isLoading: false,
        }));
      }
    } catch (error) {
      console.log(error);
      toast.error("Xóa thất bại");

      set({ error: error.message, isLoading: false });
    }
  },
}));
