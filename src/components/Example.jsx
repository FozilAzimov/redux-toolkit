import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "./Counter";
import { fetchData } from "../reducer/fetchSlice";

const Example = () => {
  const dispatch = useDispatch();
  const countState = useSelector((state) => state.countReducer);
  const { isLoading, data, error } = useSelector((state) => state.fetchReducer);

  useEffect(() => {
    dispatch(fetchData());
  });

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div>Fozil</div>
      <div>Count: {countState.count}</div>
      <Counter />
      <ol>
        {data.map((obj) => {
          return <li key={obj.id}>{obj.name}</li>;
        })}
      </ol>
    </>
  );
};

export default Example;
