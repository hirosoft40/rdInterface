import React, { Component } from "react";
import "./App.css";
import TopButtons from "./components/TopButtons";
import Graph from "./components/Graph";
let header = [],
  figures = [];
let results;

class App extends Component {
  connectToApi() {
    var exampleSocket = new WebSocket("ws://rdsfastrack.com/backend/", [
      "com.campbellsci.webdata"
    ]);

    exampleSocket.addEventListener("open", function(event) {
      console.log("Hello Server!");
      exampleSocket.send(
        '{"message":"AddRequests","requests":[{"uri":"LNDB:8782_Flowback","mode":"most-recent","p1":"10","transaction":1,"order":"collected"}]}'
      );
    });

    exampleSocket.addEventListener("message", function(mEvent) {
      results = JSON.parse(mEvent.data);
      // header = mEvent.data[0];
      // figures = mEvent.records.data;
    });
    return results;
  }

  componentDidMount() {
    const data = this.connectToApi();
    console.log(data);
  }

  render() {
    console.log(results);
    return (
      <div>
        <Graph />
      </div>
    );
  }
}

export default App;

// setValue(res1, res2) {
//   this.setState({
//     head: res1,
//     body: res2
//   });
// }

// componentDidMount() {
//   this.getDataFromApi();
//   this.setState({
//     head: res1,
//     body: res2
//   });
//}

// export default App;
