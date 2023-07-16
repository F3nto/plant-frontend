import { addToWishList } from "../reducers/wishList";

export const handleAddToWishList = (wishListData) => {
  return (dispatch) => {
    dispatch(addToWishList(wishListData));
  };
};
