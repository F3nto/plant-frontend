export const SET_FLOWER_DATA = "SET_FLOWER_DATA";
export const SET_FRUIT_DATA = "SET_FRUIT_DATA";
export const SET_INDOOR_DATA = "SET_INDOOR_DATA";
export const SET_RAWMAT_DATA = "SET_RAWMAT_DATA";
export const setFlowerData = (data) => {
  return {
    type: SET_FLOWER_DATA,
    payload: data,
  };
};

export const setFruitData = (data) => {
  return {
    type: SET_FRUIT_DATA,
    payload: data,
  };
};

export const setIndoorData = (data) => {
  return {
    type: SET_INDOOR_DATA,
    payload: data,
  };
};

export const setRawMatData = (data) => {
  return {
    type: SET_RAWMAT_DATA,
    payload: data,
  };
};