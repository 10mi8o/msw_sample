import { render, screen } from "@testing-library/react";
import React from "react";
import { RenderTest } from "../../pages/TestSample/components/Render";

describe("RenderingTest", () => {
  test("正しく表示されてること", () => {
    render(<RenderTest />);
    // screen.debug(); // デバッグ
    // getByRoleで取れる要素は以下を参照
    // https://github.com/A11yance/aria-query#elements-to-roles

    // 存在の判定は toBeTruthy() を利用
    expect(screen.getByRole("heading")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
    expect(screen.getAllByRole("button")[0]).toBeTruthy();
    expect(screen.getAllByRole("button")[1]).toBeTruthy();
    expect(screen.getByText("Render Test Sample")).toBeTruthy();
    expect(screen.queryByText("hoge")).toBeNull(); // 無い事を判定する場合
  });
});
