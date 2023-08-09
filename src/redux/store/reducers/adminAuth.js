import { ADMIN_LOGIN_SUCCESS } from "../actions/adminAuth";
import { ADMIN_LOGOUT_SUCCESS } from "../actions/adminAuth";

const initialState = {
    isAuthenticated: false,
  };
  
  const adminAuthReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADMIN_LOGIN_SUCCESS:
        return {
          ...state,
          isAuthenticated: true,
        };
      case ADMIN_LOGOUT_SUCCESS:
        return {
          ...state,
          isAuthenticated: false,
        };
      default:
        return state;
    }
  };
  
  export default adminAuthReducer;