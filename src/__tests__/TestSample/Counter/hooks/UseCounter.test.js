import { configureStore } from "@reduxjs/toolkit";
import { act, renderHook } from "@testing-library/react-hooks";
import { useCounter } from "pages/TestSample/components/Counter/hooks/useCounter";
import { Provider } from "react-redux";
import { rootReducer } from "slices";

const store = configureStore({
  reducer: rootReducer,
});

const wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;

describe("useCounter", () => {
  test("incrementボタン押下時、1加算されること", () => {
    const { result } = renderHook(useCounter, { wrapper });
    expect(result.current.value).toBe(0); // 初期値を検証
    act(() => result.current.incrementValue());
    expect(result.current.value).toBe(1);
  });

  test("decrementボタン押下時、1減算されること", () => {
    const { result } = renderHook(useCounter, { wrapper });
    act(() => result.current.decrementValue());
    expect(result.current.value).toBe(0);
  });
});
