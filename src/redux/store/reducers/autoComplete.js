import {
  SET_FLOWER_DATA,
  SET_FRUIT_DATA,
  SET_INDOOR_DATA,
  SET_RAWMAT_DATA,
} from "../actions/autoComplete";

const initialState = {
  flowerData: [],
  fruitData: [],
  indoorData: [],
  rawMatData: [],
};

const autoCompleteReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FLOWER_DATA:
      return {
        ...state,
        flowerData: action.payload,
      };
    case SET_FRUIT_DATA:
      return {
        ...state,
        fruitData: action.payload,
      };
    case SET_INDOOR_DATA:
      return {
        ...state,
        indoorData: action.payload,
      };
    case SET_RAWMAT_DATA:
      return {
        ...state,
        rawMatData: action.payload,
      };
    default:
      return state;
  }
};

export default autoCompleteReducer;
