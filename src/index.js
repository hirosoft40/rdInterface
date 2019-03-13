import React from "react";
import App from "./App";
import BaseLayout from "./BaseLayout";
import EnhancedTable from "./components/Tables/EnhancedTable";
import ReactDOM from "react-dom";
import { createMuiTheme } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";


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
    </BrowserRouter>
  , document.getElementById("root")
);
