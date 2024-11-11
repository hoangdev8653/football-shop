import { create } from "zustand";
import {
  getAllProduct,
  getProductByKey,
  getProductBySlug,
  getProductClub,
  getProductFromVn,
  getProductNation,
  getProductNoLogo,
  getProductPretty,
  getProductAccessory,
  addProductWhishList,
  getProductWhishList,
  deleteProductWhishList,
  createProduct,
  deleteProduct,
  updateProduct,
} from "../apis/product";
import { toast } from "react-toastify";

export const productStore = create((set) => ({
  data: [],
  error: null,
  isLoading: false,
  stockQuality: 0,

  createProduct: async (data) => {
    try {
      console.log(data);

      set({ isLoading: true });
      const response = await createProduct(data);
      if (response.status === 201) {
        set({ isLoading: true });
        toast.success("Thêm Mới thành công");
      }
      console.log(response);

      return null;
    } catch (error) {
      console.log(error);
      toast.error("Thêm Mới thất bại");

      set({ error: error.message });
    }
  },

  getAllProduct: async () => {
    try {
      set({ isLoading: true });
      const response = await getAllProduct();
      if (response.status === 200) {
        set({ isLoading: false, data: response.data.content });
      }
    } catch (error) {
      console.log(error.message);
      set({ isLoading: false, error: error.message });
    }
  },

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

  getProductAccessory: async () => {
    try {
      set({ isLoading: true });
      const response = await getProductAccessory();
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

  addProductWhishList: async (id) => {
    try {
      console.log(id);

      set({ isLoading: true });
      const response = await addProductWhishList(id);
      if (response.status === 201) {
        toast.success("Thêm Sản phẩm vào mục yêu thích");
        set((state) => ({
          isLoading: false,
          data: [...state.data, response.data.content],
        }));
      }
    } catch (error) {
      console.log(error);
      toast.error("Thêm sản phẩm vào mục yêu thích thất bại");
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

  deleteProduct: async (id) => {
    try {
      console.log(id);

      // set({ isLoading: true });
      // const response = await deleteProduct(id);
      // if (response.status === 200) {
      //   toast.success("Xóa thành công");
      //   set((state) => ({
      //     isLoading: false,
      //     data: state.data.filter((item) => item._id !== id),
      //   }));
      //   return null;
      // }
    } catch (error) {
      console.log(error);
      toast.error("xóa không thành công");
      set({ error: error.message });
    }
  },

  updateProduct: async (id, data) => {
    try {
      set({ isLoading: true });
      const response = await updateProduct(id, data);
      if (response.status === 200) {
        set({ isLoading: false });
        toast.success("Cập nhật thành công");
        return null;
      }
    } catch (error) {
      console.log(error);
      toast.error("Cập nhật thất bại");
      set({ error: error.message });
    }
  },
}));
