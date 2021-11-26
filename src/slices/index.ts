import { combineReducers, Reducer } from "redux";
import { counterReducer, CounterState } from "./Counter";

export type RootState = {
  counterState: CounterState;
};

export const rootReducer: Reducer<RootState> = combineReducers({
  counterState: counterReducer,
});
