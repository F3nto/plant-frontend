import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "../actions/addToCart";

const addToCartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      return state.filter((item) => item._id !== action.payload);
    case CLEAR_CART:
        return [];
    default:
      return state;
  }
};

export default addToCartReducer;