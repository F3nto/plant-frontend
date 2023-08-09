export const SET_ADMIN_DATA = "SET_ADMIN_DATA";
export const REMOVE_ADMIN = "REMOVE_ADMIN";
export const addToAdmin = (adminData) => ({
  type: SET_ADMIN_DATA,
  payload : adminData
  
});

export const removeAdmin = (adminId) => ({
  type: REMOVE_ADMIN,
  payload: adminId,
});