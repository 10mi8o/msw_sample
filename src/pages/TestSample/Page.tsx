import React from "react";
import { Counter } from "./components/Counter";
import { FrameworkList } from "./components/FrameworkList";
import { dummyData } from "./components/FrameworkList/dummyData";
import { MockServer } from "./components/MockServer";
import { RenderTest } from "./components/Render";
import { RenderInput } from "./components/RenderInput";
import { UseEffectRender } from "./components/UseEffectRender";

const TestSamplePage: React.FC = () => {
  const outputConsole = (input: string) => {
    console.log(input);
  };

  return (
    <>
      <h1>TestSamplePage</h1>
      <RenderTest />
      <hr />

      <RenderInput outputConsole={outputConsole} />
      <hr />

      <FrameworkList frameworks={dummyData} />
      <hr />

      <UseEffectRender />
      <hr />

      <MockServer />
      <hr />

      <Counter />
    </>
  );
};

export default TestSamplePage;
