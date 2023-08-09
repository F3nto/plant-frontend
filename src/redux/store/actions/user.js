export const SET_USER_DATA = "SET_USER_DATA";
export const REMOVE_USER = "REMOVE_USER";
export const addToUser = (userData) => ({
  type: SET_USER_DATA,
  payload : userData
  
});

export const removeUser = (userId) => ({
  type: REMOVE_USER,
  payload: userId,
});