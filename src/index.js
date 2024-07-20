import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import themeColors from "./theme";
import "./index.css";
import { ThemeProvider } from "styled-components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={themeColors}>
    <App />
  </ThemeProvider>
);
