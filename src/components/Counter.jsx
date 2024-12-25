import React from "react";
import { useDispatch } from "react-redux";
import { plus } from "../reducer/countSlice";

const Counter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(plus())}>Restart</button>
      <button onClick={() => dispatch(plus("minus"))}>Minus</button>
      <button onClick={() => dispatch(plus("plus"))}>Plus</button>
    </>
  );
};

export default Counter;
