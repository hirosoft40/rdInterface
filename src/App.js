import React, { Component } from "react";
import "./App.css";
import MainBar from './components/MainBar/MainBar'
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
  waterLevel = [], // water level(12)
  oilLevel = [], // oil level (13)
  waterVolume = [], // water volume (14)
  oilVolume = [], // oil volume (15)
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
      waterLevel: [],
      oilLevel: [],
      waterVolume: [],
      oilVolume: [],
      choke: [],
      gasGravity: [],
      oilGravity: [],
      shrinkage: [],
      chlorides: []
    };
    this.connectToApi = this.connectToApi.bind(this);
    this.createArray = this.createArray.bind(this);
  }

  //=== API CALL =====
  connectToApi() {
    var exampleSocket = new WebSocket("ws://rdsfastrack.com/backend/", [
      "com.campbellsci.webdata"
    ]);

    exampleSocket.addEventListener('open', function (event) {
      console.log('Hello Server!')
      exampleSocket.send('{"message":"AddRequests","requests":[{"uri":"Server:9664_FBM_(A).Flowback","mode":"backfill","p1":"100","transaction":1,"order":"collected"}]}')
    })

    // Real-time Data Call
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
      // console.log("results", results);
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
  //==== create Array for each data set ===
  createArray() {
    let curArr = [...this.state.figures];

    const data = curArr.forEach(item => {
      const { time, vals } = item;
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
      waterLevel.push(vals[12])
      oilLevel.push(vals[13])
      waterVolume.push(vals[14]);
      oilVolume.push(vals[15]);
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
        waterLevel: waterLevel,
        oilLevel: oilLevel,
        waterVolume: waterVolume,
        oilVolume: oilVolume,
        choke: choke,
        gasGravity: gasGravity,
        oilGravity: oilGravity,
        shrinkage: shrinkage,
        chlorides: chlorides      
      }) // end of setting state

    });
    return data;
  } // end of createArray function

  componentDidMount() {
    this.connectToApi();
  }

  render() {
    return (
      <div>
        
          {/* MAIN NAV BAR */}
          <MainBar
            oilWellName = 'Server: 9664_FBM_(A)' // OIL WELL SERVER NAME PASSED DOWN TO MAINBAR
            dtime ={this.state.dtime}
            chokeSize = {this.state.choke}
            oilGravity = {this.state.oilGravity}
            oilShrinkage = {this.state.shrinkage}
            waterChlorides = {this.state.chlorides}
          />

          <h3>Time at Location: {this.state.dtime[this.state.dtime.length-1]}</h3>
          
          <h1>{this.state.errorMessage}</h1>
          
          {/* DATA PASSED DOWN TO GRAPH */}
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
            cumWater = {this.state.cumWater}
            cumOil = {this.state.cumOil}
            // gasPrevint = {this.state.gasPrevint}
            waterLevel = {this.state.waterLevel}
            oilLevel = {this.state.oilLevel}
            waterVolume = {this.state.waterVolume}
            oilVolume = {this.state.oilVolume}
            choke = {this.state.choke}
            // gasGravity = {this.state.gasGravity}
          />
      </div>
    );
  }
}

export default App;
