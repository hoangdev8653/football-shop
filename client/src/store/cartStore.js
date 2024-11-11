import { create } from "zustand";
import { addProduct, deleteProduct } from "../apis/cart";
import { getUserCurrent } from "../apis/auth";
import { toast } from "react-toastify";

export const cartStore = create((set) => ({
  data: [],
  error: null,
  isLoading: false,
  quantity: [],
  totalQuantity: 0,
  priceOneProduct: 0,
  totalPrice: 0,

  fetchCart: async () => {
    try {
      set({ isLoading: true });
      const response = await getUserCurrent();

      const quantityArray = response.data.content.cart.map(
        (item) => item.quantity
      );
      const totalQuantity = quantityArray.reduce((sum, qty) => sum + qty, 0);

      set({
        data: response.data.content.cart,
        quantity: quantityArray,
        totalQuantity: totalQuantity,
        isLoading: false,
      });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },

  addProduct: async (productData) => {
    try {
      set({ isLoading: true });
      const response = await addProduct(productData);
      if (response.status === 201) {
        toast.success("Thêm mới thành công");

        set((state) => {
          const newQuantity = response.data.content.cart.map(
            (item) => item.quantity
          );
          const updatedQuantity = [...state.quantity, newQuantity];

          const totalQuantity = newQuantity.reduce(
            (total, item) => total + item,
            0
          );

          return {
            isLoading: false,
            data: [...state.data, response.data.content],
            quantity: updatedQuantity,
            totalQuantity: totalQuantity,
          };
        });
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message, isLoading: false });
    }
  },

  deleteProduct: async (productId) => {
    try {
      set({ isLoading: true });
      const response = await deleteProduct(productId);
      if (response.status === 200) {
        toast.success("Xóa thành công");

        set((state) => {
          const updatedData = state.data.filter(
            (item) => item.productId._id !== productId
          );
          const updatedQuantity = updatedData.map((item) => item.quantity);
          const updatedTotalQuantity = updatedQuantity.reduce(
            (sum, qty) => sum + qty,
            0
          );

          return {
            data: updatedData,
            quantity: updatedQuantity,
            totalQuantity: updatedTotalQuantity,
            isLoading: false,
          };
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Xóa thất bại");
      set({ error: error.message, isLoading: false });
    }
  },
}));
