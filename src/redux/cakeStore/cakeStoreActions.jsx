import { ORDER_CAKE, RESTOKE_CAKE } from "./cakeStoreTypes";

export const orderCake = (quantity = 1) => {
  return {
    type: ORDER_CAKE,
    quantity: quantity,
  };
};

export const restockCake = (quantity = 1) => {
  return {
    type: RESTOKE_CAKE,
    quantity: quantity,
  };
};
