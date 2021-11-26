import { configureStore } from "@reduxjs/toolkit";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { Counter } from "pages/TestSample/components/Counter";
import { Provider } from "react-redux";
import { rootReducer } from "slices";

afterEach(() => cleanup());

describe("ReduxAsync test", () => {
  let store;
  beforeEach(() => {
    store = configureStore({ reducer: rootReducer });
  });
  test("fetchDummyが呼ばれた際、「100 + 引数」で渡された数値がvalueに反映されること", async () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    userEvent.click(screen.getByText("FetchDummy"));
    expect(await screen.findByTestId("count-value_2")).toHaveTextContent(105);
  });
});

const server = setupServer(
  rest.get("https://jsonplaceholder.typicode.com/users/1", (_, res, ctx) => {
    return res(ctx.status(200), ctx.json({ username: "Bred dummy" }));
  })
);

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
afterAll(() => server.close());

describe("Redux Async API Mock", () => {
  let store;
  beforeEach(() => {
    store = configureStore({ reducer: rootReducer });
  });

  test("[Fetch Success]usernameが表示されること", async () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    expect(screen.queryByRole("paragraph")).toBeNull();
    userEvent.click(screen.getByText("FetchUser"));
    expect(await screen.findByText("Bred dummy")).toBeInTheDocument();
  });
});
