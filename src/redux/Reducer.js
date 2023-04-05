import { DECREMENT, INCREMENT } from "./Type";

const initialState = {
  count: 0,
};

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + action.payload };

    case DECREMENT:
      return {
        ...state,
        count: state.count > 0 ? state.count - action.payload : 0,
      };

    default:
      return state;
  }
};

export default CounterReducer;
