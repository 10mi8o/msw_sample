import { render, screen } from "@testing-library/react";
import { Render } from "../../pages/TestSample/components/Render";

describe("RenderingTest", () => {
  test("正しく表示されてること", () => {
    const { debug } = render(<Render />);
    debug(); // デバッグ

    expect(screen.getByRole("heading")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
    expect(screen.getByRole("button", { name: /increment/i })).toBeTruthy();

    expect(screen.getAllByRole("button")[0]).toBeTruthy();
    expect(screen.getAllByRole("button")[1]).toBeTruthy();

    expect(screen.getByLabelText("Count:")).toBeTruthy();
    expect(screen.getByPlaceholderText("Enter")).toBeTruthy();

    expect(
      screen.getByText("これはレンダリングテストのサンプルです。")
    ).toBeTruthy();
    expect(screen.getByText("forStudy")).toBeTruthy();

    expect(screen.getByDisplayValue("これはテストです")).toBeTruthy();

    expect(screen.queryByText("hoge")).toBeNull(); // 要素がないことを検証
  });
});
