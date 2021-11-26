import { PayloadAction } from "@reduxjs/toolkit";
import { WritableDraft } from "@reduxjs/toolkit/node_modules/immer/dist/internal";
import { fetchDummy, fetchJson } from "../slice";
import { CounterState } from "../state";

export const counterReducers = {
  increment: (state: WritableDraft<CounterState>): void => {
    switch (state.mode) {
      case 0:
        state.value += 1;
        break;
      case 1:
        state.value += 100;
        break;
      case 2:
        state.value += 1000;
        break;
      default:
        break;
    }
  },
  decrement: (state: WritableDraft<CounterState>): void => {
    state.value -= 1;
  },
  incrementByAmount: (
    state: WritableDraft<CounterState>,
    action: PayloadAction<{ counter: CounterState }>
  ): void => {
    const { value } = action.payload.counter;
    switch (state.mode) {
      case 0:
        state.value += value;
        break;
      case 1:
        state.value += value * 100;
        break;
      case 2:
        state.value += value * 1000;
        break;
      default:
        break;
    }
  },

  extraReducers: (builder: any): void => {
    builder.addCase(fetchDummy.fulfilled, (state: any, action: any) => {
      state.value = 100 + Number(action.payload);
    });
    builder.addCase(fetchDummy.fulfilled, (state: any, action: any) => {
      state.value = 100 - Number(action.payload);
    });
    builder.addCase(fetchJson.fulfilled, (state: any, action: any) => {
      state.username = action.payload;
    });
  },
};
