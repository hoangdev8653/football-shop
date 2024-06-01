// import { create } from "zustand";

// export const whishListStore = create((set) => ({
//   data: null,
//   error: null,
//   isLoading: false,
//   addProduct: async (productId) => {
//     try {
//       set({ isLoading: true });
//       const response = await addProduct(productId);
//       if (response.status === 201) {
//         set((state) => ({
//           isLoading: false,
//           data: [...state.data, response.data.content],
//         }));
//       }
//     } catch (error) {
//       console.log(error);
//       set({ error: error.message });
//     }
//   },

//   deleteProduct: async (productId) => {
//     try {
//       set({ isLoading: true });
//       const response = await deleteProduct(productId);
//       if (response.status === 200) {
//         set({ isLoading: false });
//         set((state) => ({
//           data: state.data.filter((item) => item._id !== productId),
//         }));
//       }
//     } catch (error) {
//       console.log(error);
//       set({ error: error.message });
//     }
//   },
// }));
