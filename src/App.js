import React, { Component } from "react";
import "./App.css";
import TopButtons from "./components/TopButtons";
import Graph from "./components/Graph";

class App extends Component {
  render() {
    return (
      <div>
        <TopButtons />
        <Graph />
      </div>
    );
  }
}

export default App;
