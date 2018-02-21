// @flow
import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

import registerServiceWorker from "./registerServiceWorker";

import "normalize.css";

import "./utils/animations.css";
import "./utils/widths.css";
import "./utils/elements.css";
import "./index.css";
import "./components/grid.css";
import "./components/btn.css";

const mount = document.querySelector("[data-mount]");

if (mount) {
  ReactDOM.render(<App />, mount);
}

registerServiceWorker();
