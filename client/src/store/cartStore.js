import { create } from "zustand";
import {
  addProductToCart,
  updateQuantityCart,
  deleteProductToCart,
} from "../apis/cart";
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

  getProductToCart: async () => {
    try {
      set({ isLoading: true });
      const response = await getUserCurrent();
      const quantityArray = response.data.content.cart.map(
        (item) => item.quantity
      );
      const totalQuantity = quantityArray.reduce((sum, qty) => sum + qty, 0);
      set({
        isLoading: false,
        data: response.data.content.cart,
        quantity: quantityArray,
        totalQuantity: totalQuantity,
        totalPrice: response.data.content.totalPrice,
      });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },

  addProductToCart: async (productData) => {
    try {
      set({ isLoading: true });
      const response = await addProductToCart(productData);
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

  updateQuantityCart: async (products) => {
    try {
      const formatData = products.map((item) => {
        return {
          productId: item.productId._id,
          quantity: item.quantity,
        };
      });
      const response = await updateQuantityCart(formatData);
      if (response.status === 200) {
        toast.success("Cập nhật thành công");
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message, isLoading: false });
    }
  },

  increaseQuantity: (productId) =>
    set((state) => ({
      data: state.data.map((item) =>
        item.productId._id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    })),

  decreaseQuantity: (productId) =>
    set((state) => ({
      data: state.data.map((item) =>
        item.productId._id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
    })),

  deleteProductToCart: async (productId) => {
    try {
      set({ isLoading: true });
      const response = await deleteProductToCart(productId);
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
      toast.error("Xóa Thất Bại");
      set({ error: error.message, isLoading: false });
    }
  },
}));
