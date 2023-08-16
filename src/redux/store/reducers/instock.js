import { UPDATE_INSTOCK_LEFT } from "../actions/instock";

const initialState = {};

const instockLeftReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_INSTOCK_LEFT:
      return {
        ...state,
        [action.payload.itemId]: action.payload.instockLeft,
      };
    default:
      return state;
  }
};

export default instockLeftReducer;