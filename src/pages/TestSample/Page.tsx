import React from "react";
import { FrameworkList } from "./components/FrameworkList";
import { dummyData } from "./components/FrameworkList/dummyData";
import { MockServer } from "./components/MockServer";
import { RenderTest } from "./components/Render";
import { RenderInput } from "./components/RenderInput";

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

      {/* <UseEffectRender /> */}

      <MockServer />
    </>
  );
};

export default TestSamplePage;
