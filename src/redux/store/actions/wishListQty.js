import { addToWishListQty } from "../reducers/wishListQty";

export const handleAddToWishListQty = (wishListQty) => {
  return (dispatch) => {
    dispatch(addToWishListQty(wishListQty));
  };
};
