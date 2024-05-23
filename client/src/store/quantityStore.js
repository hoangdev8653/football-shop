import { create } from "zustand";

export const quantityStore = create((set) => ({
  value: 1,
  plus: false,
  minus: false,

  increment: () =>
    set((state) => ({
      plus: true,
      minus: false,
      value: parseInt(state.value + 1),
    })),
  decrement: () =>
    set((state) => ({
      plus: false,
      minus: true,
      value: state.value > 1 ? state.value - 1 : 1,
    })),
  deleteQuantity: () =>
    set(() => ({
      plus: false,
      minus: false,
      value: "",
    })),
  setQuantity: (quantity) =>
    set(() => ({
      value: quantity,
    })),
}));
