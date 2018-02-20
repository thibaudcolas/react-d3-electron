import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

import registerServiceWorker from "./registerServiceWorker";

import "normalize.css";

import "./index.css";
import "./utils/animations.css";
import "./utils/widths.css";
import "./utils/elements.css";
import "./components/grid.css";
import "./components/btn.css";

ReactDOM.render(<App />, document.querySelector("[data-mount]"));

registerServiceWorker();
