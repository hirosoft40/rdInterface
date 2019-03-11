import React from "react";
import App from "./App";
import BaseLayout from "./BaseLayout";
import EnhancedTable from "./components/Tables/EnhancedTable";
import FetchData from "./components/reducers/FetchData";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createMuiTheme } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import thunk from "redux-thunk";

const store = createStore(
  FetchData,
  composeWithDevTools(applyMiddleware(thunk))
);

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
  <Provider store={store}>
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
  </Provider>,
  document.getElementById("root")
);
