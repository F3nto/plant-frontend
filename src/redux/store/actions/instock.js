export const UPDATE_INSTOCK_LEFT = "UPDATE_INSTOCK_LEFT"

export const updateInstockLeft = (itemId, instockLeft) => {
  return{
    type: UPDATE_INSTOCK_LEFT,
    payload: { itemId, 
    instockLeft 
  },

  };

};
  