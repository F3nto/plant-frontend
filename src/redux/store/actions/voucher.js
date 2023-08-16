export const SET_CHECKOUT_DATA = "SET_CHECKOUT_DATA";

export const setCheckoutData = (data) => {
  return {
    type: SET_CHECKOUT_DATA,
    payload: data,
  };
};