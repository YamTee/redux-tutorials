import { ORDER_ICECREAM, RESTOKE_ICECREAM } from "./icecreamTypes";

export const orderIceCream = (quantity = 1) => {
  return {
    type: ORDER_ICECREAM,
    quantity: quantity,
  };
};

export const restockIcecream = (quantity = 1) => {
  return {
    type: RESTOKE_ICECREAM,
    quantity: quantity,
  };
};
