import React from "react";
import ReactDOM from "react-dom";
<<<<<<< HEAD
import App from "./components/App";

import "assets/scss/black-dashboard-react.scss";
import "assets/css/nucleo-icons.css";

=======
import App from "./App";
>>>>>>> 2c6150eed8c98018e697f9aa61a2fdeca94d5103
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
