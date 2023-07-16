import { combineReducers } from 'redux';
import wishListReducer from './wishList';
import wishListQtyReducer from './wishListQty';

const rootReducer = combineReducers({
  wishList: wishListReducer,
  wishListQty: wishListQtyReducer,
});

export default rootReducer;