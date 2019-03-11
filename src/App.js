import React, { Component } from "react";
// import Graph from "./components/Graph/Graph";
import "./App.css";
import MainGraph from "./components/Graph/MainGraph";
import EnhancedTable from "./components/Tables/EnhancedTable";

let dtime = [], // time (x coordinates)
  pAnn = [], // annular pressure (0)
  pWH = [], // wellhead pressure (1)
  pDS = [], // ds of choke pressure (2)
  pSep = [], // separator pressure (3)
  pDiff = [], // differential pressure (4)
  gasTemp = [], // gas temperature (5)
  gasRate = [], // gas rate (6),
  waterRate = [], // water rate (7)
  oilRate = [], // oil rate (8)
  cumWater = [], // cumulative water (9)
  cumOil = [], // cumalative oil (10)
  gasPrevint = [], // gasPrevint (11)
  waterLevel = [], // water level(12)
  oilLevel = [], // oil level (13)
  vol_w = [], // water volume (14)
  vol_o = [], // oil volume (15)
  choke = [], // choke (16)
  gasGravity = [], // gas gravity (17)
  oilGravity = [], // oil gravity (18)
  shrinkage = [], // shrinkage (19)
  chlorides = []; // chlorides (20)

class App extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     header: [],
  //     figures: [],
  //     errorMessage: "",
  //     waterLevel: 0,
  //     oilLevel: 0,
  //     vol_w_val: 0,
  //     vol_o_val: 0
  //   };
  //   this.connectToApi = this.connectToApi.bind(this);
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
  //       '{"message":"AddRequests","requests":[{"uri":"Server:9664_FBM_(A).Flowback","mode":"backfill","p1":"7200","transaction":1,"order":"collected"}]}'
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
  //       // === setting data information ===
  //       this.setState({
  //         figures: results.records.data
  //       });
  //     } else {
  //       // === setting header info ===
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
  //     // dtime.push(this.getTimeFormat(time));
  //     dtime.push(time);
  //     pAnn.push(vals[0]);
  //     pWH.push(vals[1]);
  //     pDS.push(vals[2]);
  //     pSep.push(vals[3]);
  //     pDiff.push(vals[4]);
  //     gasTemp.push(vals[5]);
  //     gasRate.push(vals[6]);
  //     waterRate.push(vals[7]);
  //     oilRate.push(vals[8]);
  //     cumWater.push(vals[9]);
  //     cumOil.push(vals[10]);
  //     gasPrevint.push(vals[11]);
  //     waterLevel.push(vals[12]);
  //     oilLevel.push(vals[13]);
  //     vol_w.push(vals[14]);
  //     vol_o.push(vals[15]);
  //     choke.push(vals[16]);
  //     gasGravity.push(vals[17]);
  //     oilGravity.push(vals[18]);
  //     shrinkage.push(vals[19]);
  //     chlorides.push(vals[20]);

  //     this.setState({
  //       waterLevel: vals[12],
  //       oilLevel: vals[13],
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
        <h1>{this.state.errorMessage}</h1>
        {/* <MainGraph
          pAnn={this.pAnn}
          pWH={this.pWH}
          pDS={this.pDS}
          pSep={this.pSep}
          pDiff={this.pDiff}
          gasTemp={this.gasTemp}
          gasRate={this.gasRate}
          waterRate={this.waterRate}
          oilRate={this.oilRate}
          // cumWater = {this.cumWater}
          // cumOil = {this.cumOil}
          // gasPrevint = {this.gasPrevint}
          waterLevel={this.waterLevel}
          oilLevel={this.oilLevel}
          choke={this.choke}
          // gasGravity = {this.gasGravity}
          oilGravity={this.oilGravity}
          shrinkage={this.shrinkage}
          chlorides={this.chlorides}
          level_w={this.state.waterLevel}
          level_o={this.state.oilLevel}
          vol_w={this.state.vol_w_val}
          vol_o={this.state.vol_o_val}
        /> */}

        <EnhancedTable
        // finalData={this.state.finalData} header={this.state.header}
        />
      </div>
    );
  }
}

export default App;
