import { create } from "zustand";
import { getAllClub, getClubBySlug } from "../apis/club";

export const clubStore = create((set) => ({
  data: null,
  error: null,
  isLoading: false,

  getAllClub: async () => {
    try {
      set({ isLoading: true });
      const response = await getAllClub();
      set({ isLoading: false });
      if (response.status === 200) {
        set({ data: response.data.content });
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },
  getClubBySlug: async (slug) => {
    try {
      set({ isLoading: true });
      const response = await getClubBySlug(slug);
      set({ isLoading: false });
      if (response.status === 200) {
        set({ data: response.data.content });
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },
}));
