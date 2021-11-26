import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { counterReducers } from "../reducers";
import { initialState } from "../state";

const sleep = (msec: number) => {
  const start = new Date();
  while (Number(new Date()) - Number(start) < msec);
};

export const fetchDummy = createAsyncThunk("fetch/dummy", async (num) => {
  await sleep(2000);
  return num;
});

export const fetchJson = createAsyncThunk("fetch/api", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users/1"
  );
  const { username } = response.data;
  return username;
});

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    ...counterReducers,
  },
});
