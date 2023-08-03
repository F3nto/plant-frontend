import { SET_USER_EMAIL } from "../actions/email";

const emailReducer = (state = null, action) => {
  switch (action.type) {
    case SET_USER_EMAIL:
      return action.payload
    default:
      return state;
  }
};

export default emailReducer;