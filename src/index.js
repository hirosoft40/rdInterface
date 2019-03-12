import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMuiTheme } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import BaseLayout from "./BaseLayout";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import EnhancedTable from "./components/Tables/EnhancedTable";

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
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <BaseLayout>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/table" component={EnhancedTable} />
        </Switch>
      </BaseLayout>
    </MuiThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
