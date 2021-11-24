import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { FrameworkList } from "../../pages/TestSample/components/FrameworkList";
import { dummyData } from "../../pages/TestSample/components/FrameworkList/dummyData.ts";

afterEach(() => cleanup());

describe("RenderingTest With Props", () => {
  test("propsを渡さない場合、「no data.」が表示されていること", () => {
    render(<FrameworkList />);
    // screen.debug();
    expect(screen.getByText("no data.")).toBeInTheDocument();
  });

  test("propsを渡した場合、dataが表示されていること", () => {
    render(<FrameworkList frameworks={dummyData} />);
    // screen.debug();

    const frameworkItems = screen
      .getAllByRole("listitem")
      .map((elem) => elem.textContent);
    const dummyItems = dummyData.map((elem) => elem.item);
    expect(frameworkItems).toEqual(dummyItems);
    expect(screen.queryByText("no data.")).toBeNull();
  });
});
