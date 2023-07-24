import { combineReducers } from 'redux';
import wishListReducer from './wishList';
import addToCartReducer from './addToCart';

const rootReducer = combineReducers({
  wishList: wishListReducer,
  addToCart : addToCartReducer,
});

export default rootReducer;