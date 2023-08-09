import { SET_ADMIN_DATA } from "../actions/admin";
import { REMOVE_ADMIN } from "../actions/admin";
const adminReducer = (state = null, action) => {
  switch (action.type) {
    case SET_ADMIN_DATA:
      return action.payload
    case REMOVE_ADMIN:
      return null
    default:
      return state;
  }
};

export default adminReducer;