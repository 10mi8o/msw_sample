import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { MockServer } from "../../pages/TestSample/components/MockServer";

const server = setupServer(
  rest.get("https://jsonplaceholder.typicode.com/users/1", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ username: "Name Dummy" }));
  })
);

beforeAll(() => server.listen());

afterEach(() => {
  server.resetHandlers();
  cleanup();
});

afterAll(() => server.close());

describe("Mocking API", () => {
  test("データ取得が成功し、取得データが表示されること", async () => {
    render(<MockServer />);
    userEvent.click(screen.getByRole("button"));
    expect(await screen.findByRole("heading")).toHaveTextContent("Name Dummy");
    expect(screen.getByRole("button")).toHaveAttribute("disabled");
  });
  test("データ取得が失敗し、エラーメッセージが表示されること", async () => {
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users/1",
        (req, res, ctx) => {
          return res(ctx.status(404));
        }
      )
    );
    render(<MockServer />);
    userEvent.click(screen.getByRole("button"));
    expect(await screen.findByTestId("error")).toHaveTextContent(
      "Feching Failed!"
    );
    expect(screen.queryByRole("heading")).toBeNull();
    expect(screen.getByRole("button")).not.toHaveAttribute("disabled");
  });
});
