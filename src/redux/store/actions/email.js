export const SET_USER_EMAIL = "SET_USER_EMAIL";
export const REMOVE_USER_EMAIL = "REMOVE_USER_EMAIL";

export const addToEmail = (email) => ({
  type: SET_USER_EMAIL,
  payload : email
  
});

export const removeUserEmail = (userId) => ({
  type: REMOVE_USER_EMAIL,
  payload: userId,
});