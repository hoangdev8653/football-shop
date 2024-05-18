import {
  MINUS_QUANTITY,
  PLUS_QUANTITY,
  DELETE_QUANTITY,
  SET_QUANTITY,
} from "../actions/quantity";

const initState = {
  value: 1,
  plus: false,
  minus: false,
};

export const valueQuantity = (state = initState, action) => {
  switch (action.type) {
    case PLUS_QUANTITY:
      return {
        ...state,
        plus: true,
        value: parseInt(state.value + 1),
      };

    case MINUS_QUANTITY:
      return {
        ...state,
        plus: false,
        minus: true,
        value: state.value - 1 > 0 ? state.value - 1 : 1,
      };
    case DELETE_QUANTITY:
      return {
        ...state,
        plus: false,
        minus: false,
        value: 0,
      };
    case SET_QUANTITY:
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};
