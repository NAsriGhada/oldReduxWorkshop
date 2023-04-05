import { DECREMENT, INCREMENT } from "./Type";

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
