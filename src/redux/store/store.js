import { configureStore } from "@reduxjs/toolkit";
import wishListReducer from "./reducers/wishList";
import addToCartReducer from "./reducers/addToCart";

const store = configureStore({
  reducer: {
    wishList: wishListReducer,
    addToCart : addToCartReducer,
  },
});

export default store;
