import { configureStore } from "@reduxjs/toolkit";
import wishListReducer from "./reducers/wishList";
import addToCartReducer from "./reducers/addToCart";
import addToCartQtyReducer from "./reducers/addToCartQty";
import userReducer from "./reducers/user";
import emailReducer from "./reducers/email";
import authReducer from "./reducers/auth";
import autoCompleteReducer from "./reducers/autoComplete";
import adminReducer from "./reducers/admin";
import adminAuthReducer from "./reducers/adminAuth";
import adminEmailReducer from "./reducers/adminEmail";

const store = configureStore({
  reducer: {
    wishList: wishListReducer,
    addToCart : addToCartReducer,
    addToCartQty : addToCartQtyReducer,
    addToUser : userReducer,
    addToEmail : emailReducer,
    addToAdminEmail : adminEmailReducer,
    auth : authReducer,
    adminAuth : adminAuthReducer,
    setAutoComplete : autoCompleteReducer,
    addToAdmin : adminReducer
  },
});

export default store;
