import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../actions/wishList";

const wishListReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return [...state, action.payload];
    case REMOVE_FROM_WISHLIST:
      return state.filter((item) => item._id !== action.payload);
    default:
      return state;
  }
};

export default wishListReducer;