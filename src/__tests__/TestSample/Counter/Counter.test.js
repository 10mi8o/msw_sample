import { configureStore } from "@reduxjs/toolkit";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Counter } from "pages/TestSample/components/Counter";
import React from "react";
import { Provider } from "react-redux";
import { rootReducer } from "slices";

afterEach(() => {
  cleanup();
});

describe("Redux Integration Test", () => {
  let store;
  beforeEach(() => {
    store = configureStore({ reducer: rootReducer });
  });
  test("incrementアクションが正しく機能してるか。1ずつ加算されてるか", () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    userEvent.click(screen.getByText("+"));
    userEvent.click(screen.getByText("+"));
    userEvent.click(screen.getByText("+"));
    expect(screen.getByTestId("count-value")).toHaveTextContent(3);
  });

  test("decrementアクションが正しく機能しているか。1ずつ減算されてるか", () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    userEvent.click(screen.getByText("-"));
    userEvent.click(screen.getByText("-"));
    expect(screen.getByTestId("count-value")).toHaveTextContent(-2);
  });

  test("incrementByAmountアクションが正しく機能しているか。入力値に応じて加算されてるか", () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    userEvent.type(screen.getByPlaceholderText("Enter"), "30");
    userEvent.click(screen.getByText("Increment By Amount"));
    expect(screen.getByTestId("count-value")).toHaveTextContent(30);
  });
});
