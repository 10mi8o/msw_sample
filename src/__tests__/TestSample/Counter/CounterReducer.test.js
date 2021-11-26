import {
  counterReducer,
  decrement,
  increment,
  incrementByAmount,
} from "slices/Counter";

describe("Reducer of RTK", () => {
  describe("increment action", () => {
    test("モード0の際にvalue値に「１」加算されること", () => {
      let initialState = {
        mode: 0,
        value: 2,
      };
      const action = { type: increment };
      const state = counterReducer(initialState, action);
      expect(state.value).toEqual(3);
    });
    test("モード１の際にvalue値に「100」加算されること", () => {
      let initialState = {
        mode: 1,
        value: 2,
      };
      const action = { type: increment };
      const state = counterReducer(initialState, action);
      expect(state.value).toEqual(102);
    });
    test("モード2の際にvalue値に「1000」加算されること", () => {
      let initialState = {
        mode: 2,
        value: 2,
      };
      const action = { type: increment };
      const state = counterReducer(initialState, action);
      expect(state.value).toEqual(1002);
    });
  });

  describe("decrement action", () => {
    test("decrementされること", () => {
      let initialState = {
        mode: 0,
        value: 1,
      };
      const action = { type: decrement };
      const state = counterReducer(initialState, action);
      expect(state.value).toEqual(0);
    });
  });

  describe("incrementByAmount action", () => {
    test("モード0の際にvalue値にpayloadの値が加算されること", () => {
      let initialState = {
        mode: 0,
        value: 1,
      };
      const action = {
        type: incrementByAmount,
        payload: { value: 5 },
      };
      const state = counterReducer(initialState, action);
      expect(state.value).toEqual(6);
    });
    test("モード1の際にvalue値にpayloadの値に100が乗算されて加算されること", () => {
      let initialState = {
        mode: 1,
        value: 1,
      };
      const action = {
        type: incrementByAmount,
        payload: { value: 5 },
      };
      const state = counterReducer(initialState, action);
      expect(state.value).toEqual(501);
    });
    test("モード2の際にvalue値にpayloadの値に1000が乗算されて加算されること", () => {
      let initialState = {
        mode: 2,
        value: 1,
      };
      const action = {
        type: incrementByAmount,
        payload: { value: 5 },
      };
      const state = counterReducer(initialState, action);
      expect(state.value).toEqual(5001);
    });
  });
});
