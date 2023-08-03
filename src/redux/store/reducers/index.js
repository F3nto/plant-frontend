import { combineReducers } from 'redux';
import wishListReducer from './wishList';
import addToCartReducer from './addToCart';
import addToCartQtyReducer from './addToCartQty';
import userReducer from './user';
import emailReducer from './email';

const rootReducer = combineReducers({
  wishList: wishListReducer,
  addToCart : addToCartReducer,
  addToCartQty : addToCartQtyReducer,
  addToUser : userReducer,
  addToEmail : emailReducer,
});

export default rootReducer;