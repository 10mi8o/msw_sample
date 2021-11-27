import React from "react";

export const Render: React.FC = () => {
  return (
    <div>
      <h2>RenderTestSample</h2>

      <div>
        <img src={`${process.env.PUBLIC_URL}/logo192.png`} alt="ReactLogo" />
      </div>

      <div>
        これはレンダリングテストのサンプルです。<span>forStudy</span>
      </div>

      <div>
        <label htmlFor="count">Count:</label>
        <input
          id="count"
          type="text"
          placeholder="Enter"
          value="defaultValue"
        />
      </div>

      <button type="button" name="increment">
        Increment
      </button>
      <button type="button" name="decrement">
        Decrement
      </button>
      <button type="button" name="reset">
        Reset
      </button>
    </div>
  );
};
