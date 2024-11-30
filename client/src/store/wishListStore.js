import { toast } from "react-toastify";
import {
  getProductWhishList,
  deleteProductWhishList,
  addProductWhishList,
} from "../apis/product";
import { create } from "zustand";

export const whishListStore = create((set) => ({
  data: [],
  error: null,
  loading: false,

  addProductWhishList: async (id) => {
    try {
      set({ loading: true });
      const response = await addProductWhishList(id);
      if (response.status === 201) {
        toast.success("Thêm sản phẩm vào mục yêu thích");
        set((state) => ({
          loading: false,
          data: [...state.data, response.data.content],
        }));
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },

  getProductWhishList: async () => {
    try {
      set({ loading: true });
      const response = await getProductWhishList();
      set({ loading: false });
      if (response.status === 200) {
        set({ data: response.data.content });
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },

  deleteProductWhishList: async (id) => {
    try {
      set({ loading: true });
      const response = await deleteProductWhishList(id);
      if (response.status === 200) {
        toast.success("Xóa Thành công");
        set((state) => ({
          loading: false,
          data: state.data.filter((item) => item._id !== id),
        }));
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },
}));
