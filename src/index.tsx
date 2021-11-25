import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

if (
  process.env.NODE_ENV === "development" &&
  process.env.REACT_APP_USE_MOCK_SERVER === "true"
) {
  const { worker } = require("./mocks/browser");
  worker.start();
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
