export const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
export const REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST";

export const addToWishList = (item) => ({
  type: ADD_TO_WISHLIST,
  payload: item,
});

export const removeFromWishList = (itemId) => ({
  type: REMOVE_FROM_WISHLIST,
  payload: itemId,
});