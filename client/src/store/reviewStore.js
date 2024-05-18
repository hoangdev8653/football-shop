import { create } from "zustand";
import {
  createReview,
  deleteReview,
  getReviewsByProduct,
  updateReview,
} from "../apis/reviews";

export const reviewStore = create((set) => ({
  data: null,
  error: null,
  isLoading: false,
  totalRating: 0,
  averageRating: 0,
  getReviewsByProduct: async (id) => {
    try {
      set({ isLoading: true });
      const response = await getReviewsByProduct(id);
      if (response.status === 200) {
        set({
          isLoading: false,
          data: response.data.content,
          totalRating: response.data.ratingLength,
          averageRating: response.data.averageRating,
        });
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message, isLoading: false });
    }
  },
  createReview: async (data, token) => {
    try {
      set({ isLoading: true });
      const response = await createReview(data);
      if (response.status === 201) {
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message, isLoading: false });
    }
  },
}));
