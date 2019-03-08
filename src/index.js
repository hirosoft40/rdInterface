import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMuiTheme } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import BaseLayout from "./BaseLayout";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: { main: "#184787" },
    secondary: { main: "#f4cd00" }
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <BaseLayout>
      <App />
    </BaseLayout>
  </MuiThemeProvider>,
  document.getElementById("root")
);


