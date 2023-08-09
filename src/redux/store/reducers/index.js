import { combineReducers } from 'redux';
import wishListReducer from './wishList';
import addToCartReducer from './addToCart';
import addToCartQtyReducer from './addToCartQty';
import userReducer from './user';
import emailReducer from './email';
import authReducer from './auth';
import autoCompleteReducer from './autoComplete';
import adminReducer from './admin';
import adminAuthReducer from './adminAuth';
import adminEmailReducer from './adminEmail';

const rootReducer = combineReducers({
  wishList: wishListReducer,
  addToCart : addToCartReducer,
  addToCartQty : addToCartQtyReducer,
  addToUser : userReducer,
  addToEmail : emailReducer,
  addToAdminEmail : adminEmailReducer,
  auth : authReducer,
  setAutoComplete : autoCompleteReducer,
  addToAdmin : adminReducer,
  adminAuth : adminAuthReducer
  
});

export default rootReducer;