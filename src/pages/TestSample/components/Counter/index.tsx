import React from "react";
import { useCounter } from "./hooks/useCounter";

export const Counter: React.FC = () => {
  const {
    value,
    username,
    num,
    incrementValue,
    decrementValue,
    incrementByAmountValue,
    onFetchDummy,
    onChangeNum,
    onFetchUser,
  } = useCounter();

  return (
    <>
      <h2>ReduxTestSample</h2>
      <p data-testid="count-value">Value: {value}</p>
      <button onClick={incrementValue}>+</button>
      <button onClick={decrementValue}>-</button>
      <button onClick={() => incrementByAmountValue(num)}>
        Increment By Amount
      </button>
      <input type="text" placeholder="Enter" onChange={(e) => onChangeNum(e)} />
      <hr />
      <span data-testid="count-value_2">{value}</span>
      <button onClick={onFetchDummy}>FetchDummy</button>
      <hr />
      {username && <p>{username}</p>}
      <button onClick={onFetchUser}>FetchUser</button>
    </>
  );
};
