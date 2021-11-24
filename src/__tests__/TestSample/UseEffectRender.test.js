import { render, screen } from "@testing-library/react";
import React from "react";
import { UseEffectRender } from "../../pages/TestSample/components/UseEffectRender";

describe("useEffectRenderingTest", () => {
  test("正しく表示されること", async () => {
    render(<UseEffectRender />);
    expect(screen.queryByText(/I'm/)).toBeNull();
    expect(await screen.findByText(/I'm/)).toBeInTheDocument();
  });
});
