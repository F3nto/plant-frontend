import { configureStore } from "@reduxjs/toolkit";
import wishListReducer from "./reducers/wishList";
import wishListQtyReducer from "./reducers/wishListQty";

const store = configureStore({
  reducer: {
    wishList: wishListReducer,
    wishLIstQty: wishListQtyReducer,
  },
});

export default store;
