import { SET_CHECKOUT_DATA } from "../actions/voucher";

const initialState = {
  checkoutData: null,
};

const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHECKOUT_DATA:
      return {
        ...state,
        checkoutData: action.payload,
      };
    default:
      return state;
  }
};

export default checkoutReducer;