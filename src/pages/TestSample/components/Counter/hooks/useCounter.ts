import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { decrement, increment, incrementByAmount } from "slices/Counter";
import { fetchDummy, fetchJson } from "slices/Counter/slice";

type ReturnType = {
  num: number;
  value: number;
  username: string;
  incrementValue: () => void;
  decrementValue: () => void;
  incrementByAmountValue: (num: number) => void;
  onFetchDummy: () => void;
  onFetchUser: () => void;
  onChangeNum: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const useCounter = (): ReturnType => {
  const [num, setNum] = useState(0);

  const { value, username } = useSelector(
    (state: RootState) => state.counterState
  );

  const dispatch = useDispatch();

  const incrementValue = () => {
    dispatch(increment());
  };

  const decrementValue = () => {
    dispatch(decrement());
  };

  const incrementByAmountValue = (num: number) => {
    dispatch(incrementByAmount({ value: num }));
  };

  const onFetchDummy = () => {
    dispatch(fetchDummy(5));
  };

  const onFetchUser = () => {
    dispatch(fetchJson());
  };

  const onChangeNum = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNum(Number(e.target.value) | 0);
  };

  return {
    value,
    username,
    num,
    incrementValue,
    decrementValue,
    incrementByAmountValue,
    onFetchDummy,
    onFetchUser,
    onChangeNum,
  };
};
