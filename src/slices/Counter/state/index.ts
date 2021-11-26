export type CounterState = {
  mode: number;
  value: number;
  username: string;
};

export const initialState: CounterState = {
  mode: 0,
  value: 100,
  username: "",
};
