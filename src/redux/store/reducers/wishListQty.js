import { createSlice } from "@reduxjs/toolkit";

const wishListQtySlice = createSlice({
  name: "wishListQty",
  initialState: 0,
  reducers: {
    addToWishListQty: (state, action) => {
      return state + action.payload;
    },
  },
});

export const { addToWishListQty } = wishListQtySlice.actions;
export default wishListQtySlice.reducer;
