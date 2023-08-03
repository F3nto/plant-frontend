import { configureStore } from "@reduxjs/toolkit";
import wishListReducer from "./reducers/wishList";
import addToCartReducer from "./reducers/addToCart";
import addToCartQtyReducer from "./reducers/addToCartQty";
import userReducer from "./reducers/user";
import emailReducer from "./reducers/email";

const store = configureStore({
  reducer: {
    wishList: wishListReducer,
    addToCart : addToCartReducer,
    addToCartQty : addToCartQtyReducer,
    addToUser : userReducer,
    addToEmail : emailReducer,
  },
});

export default store;
