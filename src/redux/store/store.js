import { configureStore } from "@reduxjs/toolkit";
import wishListReducer from "./reducers/wishList";

const store = configureStore({
  reducer: {
    wishList: wishListReducer,
  },
});

export default store;
