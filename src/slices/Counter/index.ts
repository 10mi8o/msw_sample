import { counterSlice } from "./slice";

export { counterSlice } from "./slice";
export type { CounterState } from "./state";

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const counterReducer = counterSlice.reducer;
