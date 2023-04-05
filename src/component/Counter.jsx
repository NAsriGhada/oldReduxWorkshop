import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/Action";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment(2))}>+</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement(2))}>-</button>
    </div>
  );
};

export default Counter;
