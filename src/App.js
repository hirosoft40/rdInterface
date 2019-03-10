import React, { Component } from "react";
// import Graph from "./components/Graph/Graph";
import "./App.css";
import MainGraph from "./components/Graph/MainGraph";
import EnhancedTable from './components/Tables/EnhancedTable';
 

let dtime = [],
  level_w = [],
  level_o = [],
  vol_w = [],
  vol_o = [];

class App extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     header: [],
  //     figures: [],
  //     errorMessage: "",
  //     level_w_val: 0,
  //     level_o_val: 0,
  //     vol_w_val: 0,
  //     vol_o_val: 0
  //   };
  //   this.connectToApi = this.connectToApi.bind(this);
  //   this.getTimeFormat = this.getTimeFormat.bind(this);
  //   this.createArray = this.createArray.bind(this);
  // }

  // //=== API CALL =====
  // connectToApi() {
  //   var exampleSocket = new WebSocket("ws://rdsfastrack.com/backend/", [
  //     "com.campbellsci.webdata"
  //   ]);

  //   exampleSocket.addEventListener("open", event => {
  //     console.log("Hello Server!");
  //     exampleSocket.send(
  //       '{"message":"AddRequests","requests":[{"uri":"LNDB:8782_Flowback","mode":"most-recent","p1":"10","transaction":1,"order":"collected"}]}'
  //     );
  //   });

  //   // ***SIMPLE CALL***
  //   exampleSocket.addEventListener("message", async mEvent => {
  //     const results = await JSON.parse(mEvent.data);
  //     if (!results) {
  //       console.log("Nothing returned from API. results:", results);
  //       this.setState({
  //         errorMessage:
  //           "Unable to get the real time data. Please contact system team."
  //       });
  //       return;
  //     }
  //     console.log("results", results);
  //     if (results.message === "RequestRecords") {
  //       // setting data information
  //       this.setState({
  //         figures: results.records.data
  //       });
  //     } else {
  //       // setting header info
  //       this.setState({
  //         header: results.head.fields
  //       });
  //     }
  //     this.createArray();
  //   });
  // }
  // // ====  END ===

 

  // //==== create Array for each data set ===
  // createArray() {
  //   let curArr = [...this.state.figures];
  //   // console.log(this.state.figures);
  //   const gaugeData = curArr.forEach(item => {
  //     const { time, vals } = item;
  //     // console.log("item", item);
  //     dtime.push(this.getTimeFormat(time));
  //     level_w.push(vals[12]);
  //     level_o.push(vals[13]);
  //     vol_w.push(vals[14]);
  //     vol_o.push(vals[15]);
  //     this.setState({
  //       level_w_val: vals[12],
  //       level_o_val: vals[13],
  //       vol_w_val: vals[14],
  //       vol_o_val: vals[15]
  //     });
  //   });
  //   // console.log("gaugeData", level_o);
  //   return gaugeData;
  // }

  // componentDidMount() {
  //   this.connectToApi();
  // }

  render() {
    return (
      <div>
        {/* <h1>{this.state.errorMessage}</h1>
        <MainGraph
          level_w={this.state.level_w_val}
          level_o={this.state.level_o_val}
          vol_w={this.state.vol_w_val}
          vol_o={this.state.vol_o_val} */}
        />
        
    <EnhancedTable 
    // finalData={this.state.finalData} header={this.state.header}
    />
      </div>
    );
  }
}

export default App;
