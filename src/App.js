import React, { Component } from "react";
import "./App.css";
import TopButtons from "./components/TopButtons";
import Graph from "./components/Graph";

const apiDataHeader = "head";
const apiDataBody = "records";
let data1 = [],
  data2 = [];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // data: [],
      // header: []
    };
    this.getDataFromApi = this.getDataFromApi.bind(this);
  }

  getDataFromApi() {
    var exampleSocket = new WebSocket("ws://rdsfastrack.com/backend/", [
      "com.campbellsci.webdata"
    ]);

    exampleSocket.addEventListener("open", function(event) {
      console.log("Hello Server!");
      exampleSocket.send(
        '{"message":"AddRequests","requests":[{"uri":"LNDB:8782_Flowback","mode":"most-recent","p1":"10","transaction":1,"order":"collected"}]}'
      );
    });

    let count = 0;
    // ***SIMPLE CALL***
    exampleSocket.addEventListener("message", mEvent => {
      count++;
      let res = JSON.parse(mEvent.data);
      var res1 = res.head;
      var res2 = res.records;
      this.setValue(res1, res2);
    });
    // console.log(res1, res2);
  }

  setValue(res1, res2) {
    this.setState({
      head: res1,
      body: res2
    });
  }

  // componentDidMount() {
  //   this.getDataFromApi();
  //   this.setState({
  //     head: res1,
  //     body: res2
  //   });
  //}

  render() {
    console.log("state", this.state);
    // console.log("stresponseate", response);

    return (
      <div>
        <Graph data={this.getDataFromApi()} />
        {/* <TableData data={data} /> */}
      </div>
    );
  }
}

export default App;
