import { ORDER_CAKE, RESTOKE_CAKE } from "./cakeStoreTypes";

const initialState = {
  cakes: 20,
};

export const cakeStoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_CAKE:
      return {
        ...state,
        cakes: state.cakes - action.quantity,
      };

    case RESTOKE_CAKE:
      return {
        ...state,
        cakes: state.cakes + action.quantity,
      };

    default:
      return state;
  }
};
