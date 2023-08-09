import { SET_ADMIN_EMAIL } from "../actions/adminEmail";
import { REMOVE_ADMIN_EMAIL } from "../actions/adminEmail";
const adminEmailReducer = (state = null, action) => {
  switch (action.type) {
    case SET_ADMIN_EMAIL:
      return action.payload
    case REMOVE_ADMIN_EMAIL:
      return null
    default:
      return state;
  }
};

export default adminEmailReducer;