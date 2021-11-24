import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { RenderInput } from "../../pages/TestSample/components/RenderInput";

// mountされたコンポーネントをunmount
// testの中でrenderを使用するたびにコンポーネントがレンダーされる。
// テスト間の副作用は排除すること。
afterEach(() => cleanup());

describe("RenderingTest", () => {
  test("正しく表示されてること", () => {
    render(<RenderInput />);
    // screen.debug();
    expect(screen.getByRole("button")).toBeTruthy();
    expect(screen.getByPlaceholderText("Enter")).toBeTruthy();
  });
});

describe("Input from onChange event", () => {
  test("入力した要素が正しく反映されていること", () => {
    render(<RenderInput />);
    const inputValue = screen.getByPlaceholderText("Enter");
    // screen.debug(screen.getByPlaceholderText("Enter"));
    userEvent.type(inputValue, "テスト入力");
    expect(inputValue.value).toBe("テスト入力");
  });
});

describe("Console button conditionally triggered", () => {
  test("inputステートが空の時は、outputConsoleが呼ばれないこと", () => {
    // 内部処理のないmock関数を定義
    const outputConsole = jest.fn();
    render(<RenderInput outputConsole={outputConsole} />);
    // buttonがクリックされることをシュミレート
    userEvent.click(screen.getByRole("button"));
    expect(outputConsole).not.toHaveBeenCalled();
  });

  test("inputステートに値が入ってる場合は、outputConsoleが呼ばれること", () => {
    // 内部処理のないmock関数を定義
    const outputConsole = jest.fn();
    render(<RenderInput outputConsole={outputConsole} />);

    const inputValue = screen.getByPlaceholderText("Enter");
    userEvent.type(inputValue, "テスト入力");
    // buttonがクリックされることをシュミレート
    userEvent.click(screen.getByRole("button"));
    expect(outputConsole).toHaveBeenCalledTimes(1);
  });
});
