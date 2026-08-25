import { ORDER_ICECREAM, RESTOKE_ICECREAM } from "./icecreamTypes";

const initialState = {
  icecreams: 20,
};

export const icecreamStoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_ICECREAM:
      return {
        ...state,
        icecreams: state.icecreams - action.quantity,
      };

    case RESTOKE_ICECREAM:
      return {
        ...state,
        icecreams: state.icecreams + action.quantity,
      };

    default:
      return state;
  }
};
