export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const loginSuccess = () => {
    return {
      type: LOGIN_SUCCESS,
    };
  };
  
  // Action creator for successful logout
  export const logoutSuccess = () => {
    return {
      type: LOGOUT_SUCCESS,
    };
  };