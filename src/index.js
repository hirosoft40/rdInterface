import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import "assets/scss/black-dashboard-react.scss";
import "assets/css/nucleo-icons.css";

import { createMuiTheme } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#184787" },
    secondary: { main:"#f4cd00"}
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);
