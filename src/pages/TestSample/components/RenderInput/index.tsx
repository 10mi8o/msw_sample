import React, { useState } from "react";

type Props = {
  outputConsole: (input: string) => void;
};

export const RenderInput: React.FC<Props> = (props: Props) => {
  const { outputConsole } = props;
  const [input, setInput] = useState("");

  const outputValue = () => {
    if (input) {
      outputConsole(input);
    }
  };

  const updateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <h2>RenderInputTestSample</h2>
      <input
        type="text"
        placeholder="Enter"
        value={input}
        onChange={updateValue}
      />
      <button onClick={outputValue}>Console</button>
    </div>
  );
};
