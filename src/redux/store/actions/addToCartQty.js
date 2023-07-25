export const ADD_TO_CART_QTY = "ADD_TO_CART_QTY";

export const addToCartQty = (itemId, quantity) => {
  return {
    type: ADD_TO_CART_QTY,
    payload: {
      itemId,
      quantity,
    },
  };
};