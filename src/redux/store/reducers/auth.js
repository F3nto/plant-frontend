import { LOGIN_SUCCESS } from "../actions/auth";
import { LOGOUT_SUCCESS } from "../actions/auth";

const initialState = {
    isAuthenticated: false,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_SUCCESS:
        return {
          ...state,
          isAuthenticated: true,
        };
      case LOGOUT_SUCCESS:
        return {
          ...state,
          isAuthenticated: false,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;