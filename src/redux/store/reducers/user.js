import { SET_USER_DATA } from "../actions/user";
import { REMOVE_USER } from "../actions/user";
const userReducer = (state = null, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return action.payload
    case REMOVE_USER:
      return null
    default:
      return state;
  }
};

export default userReducer;