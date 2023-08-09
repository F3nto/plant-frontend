export const ADMIN_LOGIN_SUCCESS = "ADMIN_LOGIN_SUCCESS";
export const ADMIN_LOGOUT_SUCCESS = " ADMIN_LOGOUT_SUCCESS";
export const adminLoginSuccess = () => {
    return {
      type: ADMIN_LOGIN_SUCCESS,
    };
  };
  
  // Action creator for successful logout
  export const adminLogoutSuccess = () => {
    return {
      type: ADMIN_LOGOUT_SUCCESS,
    };
  };