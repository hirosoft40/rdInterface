import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createMuiTheme } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: "#184787",
    secondary: "#f4cd00"
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);
