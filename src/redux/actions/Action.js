import { DECREMENT, INCREMENT } from "../constants/Type";

export const increment = (x) => {
  return {
    type: INCREMENT,
    payload: x,
  };
};

export const decrement = (y) => {
  return {
    type: DECREMENT,
    payload: y,
  };
};
