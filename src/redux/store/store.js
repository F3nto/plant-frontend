import { configureStore } from "@reduxjs/toolkit";
import wishListReducer from "./reducers/wishList";
import addToCartReducer from "./reducers/addToCart";
import addToCartQtyReducer from "./reducers/addToCartQty";

const store = configureStore({
  reducer: {
    wishList: wishListReducer,
    addToCart : addToCartReducer,
    addToCartQty : addToCartQtyReducer,
  },
});

export default store;
