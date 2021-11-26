import { PayloadAction } from "@reduxjs/toolkit";
import { WritableDraft } from "@reduxjs/toolkit/node_modules/immer/dist/internal";
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
    action: PayloadAction<{ value: number }>
  ): void => {
    const { value } = action.payload;
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
};
