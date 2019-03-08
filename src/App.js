import React, { Component } from "react";
// import Graph from "./components/Graph/Graph";
import "./App.css";
import Gauge from "./components/Gauge/Gauge";
import MainGraph from "./components/Graph/MainGraph";
let dtime = [],
  level_w = [],
  level_o = [],
  vol_w = [],
  vol_o = [];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      header: [],
      figures: [],
      errorMessage: ""
    };
    this.connectToApi = this.connectToApi.bind(this);
  }

  //=== API CALL =====
  connectToApi() {
    var exampleSocket = new WebSocket("ws://rdsfastrack.com/backend/", [
      "com.campbellsci.webdata"
    ]);

    exampleSocket.addEventListener("open", event => {
      console.log("Hello Server!");
      exampleSocket.send(
        '{"message":"AddRequests","requests":[{"uri":"LNDB:8782_Flowback","mode":"most-recent","p1":"10","transaction":1,"order":"collected"}]}'
      );
    });

    // ***SIMPLE CALL***
    exampleSocket.addEventListener("message", async mEvent => {
      const results = await JSON.parse(mEvent.data);
      if (!results) {
        console.log("Nothing returned from API. results:", results);
        this.setState({
          errorMessage:
            "Unable to get the real time data. Please contact system team."
        });
        return;
      }
      console.log("results", results);
      if (results.message === "RequestRecords") {
        // setting data information
        this.setState({
          figures: results.records.data
        });
      } else {
        // setting header info
        this.setState({
          header: results.head.fields
        });
      }
      this.createArray();
    });
  }
  // ====  END ===

  getTimeFormat(time) {
    const d = time
      .slice(0, 10)
      .split("-")
      .join("/");
    const hour = parseInt(time.slice(11, 13)) - 12;
    if (hour < 0) {
      return `${d}, ${time.slice(11)} AM`;
    } else if (hour < 10) {
      return `${d}, 0${hour}${time.slice(13)} PM`;
    } else {
      return `${d}, ${hour}${time.slice(13)} PM`;
    }
  }

  //==== create Array for each data set ===
  createArray() {
    let curArr = [...this.state.figures];
    // console.log(this.state.figures);
    const gaugeData = curArr.forEach(item => {
      const { time, vals } = item;
      // console.log("item", item);
      dtime.push(this.getTimeFormat(time));
      level_w.push(vals[13]);
      level_o.push(vals[14]);
      vol_w.push(vals[15]);
      vol_o.push(vals[16]);
    });
    // console.log("gaugeData", level_o);
    return gaugeData;
  }

  componentDidMount() {
    this.connectToApi();
  }

  render() {
    return (
      <div>
        <h1>{this.state.errorMessage}</h1>
        <MainGraph />
        <Gauge
          level_w={level_w}
          level_o={level_o}
          vol_w={vol_w}
          vol_o={vol_o}
        />
      </div>
    );
  }
}

export default App;