import { combineReducers } from 'redux';
import wishListReducer from './wishList';
import addToCartReducer from './addToCart';
import addToCartQtyReducer from './addToCartQty';

const rootReducer = combineReducers({
  wishList: wishListReducer,
  addToCart : addToCartReducer,
  addToCartQty : addToCartQtyReducer,
});

export default rootReducer;