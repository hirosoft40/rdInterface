import React, { Component } from "react";
// import Graph from "./components/Graph/Graph";
import "./App.css";
import Gauge from "./components/Gauge/Gauge";
import MainGraph from "./components/Graph/MainGraph";

// Initializing variables (with definition and index)
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
  level_w = [], // water level (12)
  waterLevel = [], // water level(12)
  level_o = [], // oil level (13)
  oilLevel = [], // oil level (13)
  vol_w = [], // water volume (14)
  vol_o = [], // oil volume (15)
  choke = [], // choke (16)
  gasGravity = [], // gas gravity (17)
  oilGravity = [], // oil gravity (18)
  shrinkage = [], // shrinkage (19)
  chlorides = []; // chlorides (20)


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      header: [],
      figures: [], 
      errorMessage: "",
      dtime: [],
      pAnn: [], 
      pWH: [], 
      pDS: [], 
      pSep: [],
      pDiff: [],
      gasTemp: [],
      gasRate: [],
      waterRate: [],
      oilRate: [],
      cumWater: [],
      cumOil: [],
      gasPrevint: [],
      level_w_val: 0,
      waterLevel: [],
      level_o_val: 0,
      oilLevel: [],
      vol_w_val: 0,
      vol_o_val: 0,
      choke: [],
      gasGravity: [],
      oilGravity: [],
      shrinkage: [],
      chlorides: []
    };
    this.connectToApi = this.connectToApi.bind(this);
    this.getTimeFormat = this.getTimeFormat.bind(this);
    this.createArray = this.createArray.bind(this);
  }

  //=== API CALL =====
  connectToApi() {
    var exampleSocket = new WebSocket("ws://rdsfastrack.com/backend/", [
      "com.campbellsci.webdata"
    ]);

    // Static Data
    // exampleSocket.addEventListener("open", event => {
    //   console.log("Hello Server!");
    //   exampleSocket.send(
    //     '{"message":"AddRequests","requests":[{"uri":"LNDB:8782_Flowback","mode":"most-recent","p1":"1000","transaction":1,"order":"collected"}]}'
    //   );
    // });

    
    // Real-time Data
    exampleSocket.addEventListener('open', function (event) {
      console.log('Hello Server!')
      exampleSocket.send('{"message":"AddRequests","requests":[{"uri":"Server:9664_FBM_(A).Flowback","mode":"backfill","p1":"1000","transaction":1,"order":"collected"}]}')
    })

    // ***SIMPLE CALL***
    setInterval(()=>{
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
    }, 10000)
  }
  // ====  END ===

  // getTimeFormat(time) {
  //   const d = time
  //     .slice(0, 10)
  //     .split("-")
  //     .join("/");
  //   const hour = parseInt(time.slice(11, 13)) - 12;
  //   if (hour < 0) {
  //     return `${d}, ${time.slice(11)} AM`;
  //   } else if (hour < 10) {
  //     return `${d}, 0${hour}${time.slice(13)} PM`;
  //   } else {
  //     return `${d}, ${hour}${time.slice(13)} PM`;
  //   }
  // }

  //==== create Array for each data set ===
  createArray() {
    let curArr = [...this.state.figures];
    // console.log(this.state.figures);

    const data = curArr.forEach(item => {
      const { time, vals } = item;
      // console.log("item", item);
      // dtime.push(this.getTimeFormat(time));
      dtime.push(time);
      pAnn.push(vals[0]);
      pWH.push(vals[1]);
      pDS.push(vals[2]);
      pSep.push(vals[3]);
      pDiff.push(vals[4]);
      gasTemp.push(vals[5]);
      gasRate.push(vals[6]);
      waterRate.push(vals[7]);
      oilRate.push(vals[8]);
      cumWater.push(vals[9]);
      cumOil.push(vals[10]);
      gasPrevint.push(vals[11]);
      level_w.push(vals[12]);
      waterLevel.push(vals[12])
      level_o.push(vals[13]);
      oilLevel.push(vals[13])
      vol_w.push(vals[14]);
      vol_o.push(vals[15]);
      choke.push(vals[16]);
      gasGravity.push(vals[17]);
      oilGravity.push(vals[18]);
      shrinkage.push(vals[19]);
      chlorides.push(vals[20]);


      this.setState({
        dtime: dtime,
        pAnn: pAnn,
        pWH: pWH,
        pDS: pDS,
        pSep: pSep,
        pDiff: pDiff,
        gasTemp: gasTemp,
        gasRate: gasRate,
        waterRate: waterRate,
        oilRate: oilRate,
        cumWater: cumWater,
        cumOil: cumOil,
        gasPrevint: gasPrevint,
        level_w_val: vals[12],
        waterLevel: waterLevel,
        level_o_val: vals[13],
        oilLevel: oilLevel,
        vol_w_val: vals[14],
        vol_o_val: vals[15],
        choke: choke,
        gasGravity: gasGravity,
        oilGravity: oilGravity,
        shrinkage: shrinkage,
        chlorides: chlorides      
      }) // end of setting state

    });
    // console.log("gaugeData", level_o);
    return data;
  } // end of createArray function

  componentDidMount() {
    this.connectToApi();
  }

  render() {
    return (
      <div>
        <h1>{this.state.errorMessage}</h1>
        <MainGraph
          dtime = {this.state.dtime}
          pAnn = {this.state.pAnn}
          pWH = {this.state.pWH}
          pDS = {this.state.pDS}
          pSep = {this.state.pSep}
          pDiff = {this.state.pDiff}
          gasTemp = {this.state.gasTemp}
          gasRate = {this.state.gasRate}
          waterRate = {this.state.waterRate}
          oilRate = {this.state.oilRate}
          // cumWater = {this.state.cumWater}
          // cumOil = {this.state.cumOil}
          // gasPrevint = {this.state.gasPrevint}
          waterLevel = {this.state.waterLevel}
          oilLevel = {this.state.oilLevel}
          choke = {this.state.choke}
          // gasGravity = {this.state.gasGravity}
          // oilGravity = {this.state.oilGravity}
          // shrinkage = {this.state.shrinkage}
          // chlorides = {this.state.chlorides}
        />
        {/* <Gauge
          level_w={level_w}
          level_o={level_o}
          vol_w={vol_w}
          vol_o={vol_o}
        /> */}
      </div>
    );
  }
}

export default App;
