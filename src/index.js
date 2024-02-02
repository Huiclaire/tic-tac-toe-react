// the bridge between the component created in App.js and the browser.
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client"; // React DOM: React's library to talk to web browsers
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
