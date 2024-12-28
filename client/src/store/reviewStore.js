import { create } from "zustand";
import {
  createReview,
  deleteReview,
  getReviewsByProduct,
} from "../apis/reviews";

export const reviewStore = create((set) => ({
  data: null,
  error: null,
  isLoading: false,
  totalRating: 0,
  averageRating: 0,
  ratingLength: 0,
  like: 0,
  getReviewsByProduct: async (id) => {
    try {
      set({ isLoading: true });
      const response = await getReviewsByProduct(id);
      if (response.status === 200) {
        set({
          isLoading: false,
          data: response.data.content,
          totalRating: response.data.totalRating,
          ratingLength: response.data.ratingLength,
          averageRating: response.data.averageRating,
          like: response.data.like,
        });
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message, isLoading: false });
    }
  },
  createReview: async (data) => {
    try {
      set({ isLoading: true });
      const response = await createReview(data);
      if (response.status === 201) {
        set((state) => ({
          data: [response.data.content, ...state.data],
          totalRating: state.totalRating + response.data.content.rating,
          ratingLength: state.ratingLength + 1,
          averageRating:
            (state.totalRating + response.data.content.rating) /
            (state.ratingLength + 1),
        }));
        setTimeout(() => {
          set({ isLoading: false });
        }, 2000);
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message, isLoading: false });
    }
  },
  deleteReview: async (reviewId) => {
    try {
      set({ isLoading: true });
      const response = await deleteReview(reviewId);
      if (response.status === 200) {
        setTimeout(() => {
          set((state) => ({
            isLoading: false,
            data: state.data.filter((review) => review._id !== reviewId),
            totalRating: state.totalRating - 1,
            averageRating:
              state.totalRating > 1
                ? (state.averageRating * state.totalRating -
                    response.data.review?.rating) /
                  (state.totalRating - 1)
                : 0,
          }));
        }, 2000);
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message, isLoading: false });
    }
  },
}));
