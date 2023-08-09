export const SET_ADMIN_EMAIL = "SET_ADMIN_EMAIL";
export const REMOVE_ADMIN_EMAIL = "REMOVE_ADMIN_EMAIL";

export const addToAdminEmail = (email) => ({
  type: SET_ADMIN_EMAIL,
  payload : email
  
});

export const removeAdminEmail = (adminId) => ({
  type: REMOVE_ADMIN_EMAIL,
  payload: adminId,
});