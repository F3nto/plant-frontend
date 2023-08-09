import { SET_USER_EMAIL } from "../actions/email";
import { REMOVE_USER_EMAIL } from "../actions/email";
const emailReducer = (state = null, action) => {
  switch (action.type) {
    case SET_USER_EMAIL:
      return action.payload
    case REMOVE_USER_EMAIL:
      return null
    default:
      return state;
  }
};

export default emailReducer;