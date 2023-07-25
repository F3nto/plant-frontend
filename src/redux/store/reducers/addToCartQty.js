import { ADD_TO_CART_QTY } from "../actions/addToCartQty";

const addToCartQtyReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TO_CART_QTY:
      const { itemId, quantity } = action.payload;

      const existingItem = state[itemId];

      if (existingItem) {
        // Item already exists in the cart, update its quantity
        return { ...state, [itemId]: { ...existingItem, quantity } };
      } else {
        // Item does not exist in the cart, add it with the quantity
        return { ...state, [itemId]: { quantity } };
      }
    default:
      return state;
  }
};

export default addToCartQtyReducer;