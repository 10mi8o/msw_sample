import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { counterReducers } from "../reducers";
import { initialState } from "../state";

const sleep = (i: number) => {
  while (i <= 2000) {
    i++;
  }
};

export const fetchDummy = createAsyncThunk(
  "fetch/dummy",
  async (num: number) => {
    await sleep(1);
    return num;
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(fetchDummy.fulfilled, (state, action) => {
      state.value = 100 + action.payload;
    });
    builder.addCase(fetchJson.fulfilled, (state, action) => {
      state.username = action.payload;
    });
  },
});
