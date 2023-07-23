import { combineReducers } from 'redux';
import wishListReducer from './wishList';

const rootReducer = combineReducers({
  wishList: wishListReducer,
});

export default rootReducer;