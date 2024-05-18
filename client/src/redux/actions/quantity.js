// quantity.js (Redux actions)

// Action Types
export const PLUS_QUANTITY = "PLUS_QUANTITY";
export const MINUS_QUANTITY = "MINUS_QUANTITY";
export const DELETE_QUANTITY = "DELETE_QUANTITY";
export const SET_QUANTITY = "SET_QUANTITY";

// Action Creators
export const plusQuantity = () => ({
  type: PLUS_QUANTITY,
});

export const minusQuantity = () => ({
  type: MINUS_QUANTITY,
});

export const deleteQuantity = () => ({
  type: DELETE_QUANTITY,
});

export const setQuantity = () => ({
  type: SET_QUANTITY,
});
