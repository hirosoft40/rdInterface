import React, { Component } from 'react'
import Plot from 'react-plotly.js';
import { pressureChokeTrace, pressureChokeProperties }  from '../data/pressureChokeGraph';
import { pressureTempTrace , pressureTempProperties } from '../data/pressureTempGraph';
import { flowrateTrace, flowrateProperties } from '../data/flowratesGraph';
import { tankLevelTrace, tankLevelProperties } from '../data/tankLevelGraph'

  // X-Array
  var xPoints = []
  // Fields with definition and index
  var pAnn = []; // annular pressure (0)
  var pWH = []; // wellhead pressure (1)
  var pDS = []; // ds of choke pressure (2)
  var pSep = []; // separator pressure (3)
  var pDiff = []; // differential pressure (4)
  var gasTemp = []; // gas temperature (5)
  var gasRate = []; // gas rate (6)
  var waterRate = []; // water rate (7)
  var oilRate = []; // oil rate (8)
  var cumWater= []; // cumulative water (9)
  var cumOil = []; // cumalative oil (10)
  var gasPrevint = []; // gasPrevint (11)
  var waterLevel = []; // water level (12)
  var oilLevel = []; // oil level (13)
  var waterVol = []; // water volume (14)
  var oilVol = []; // oil volume (15)
  var choke = []; // choke (16)
  var gasGravity = []; // gas gravity (17)
  var oilGravity = []; // oil gravity (18)
  var shrinkage = []; // shrinkage (19)
  var chlorides = []; // chlorides (20)


export default class Graph extends Component {

componentDidMount(){
    var exampleSocket = new WebSocket('ws://rdsfastrack.com/backend/', ['com.campbellsci.webdata'])

    exampleSocket.addEventListener('open', function (event) {
        console.log('Hello Server!')
        exampleSocket.send('{"message":"AddRequests","requests":[{"uri":"LNDB:8782_Flowback","mode":"most-recent","p1":"10","transaction":1,"order":"collected"}]}')
      })
    
    // ***SIMPLE CALL***
    var header = [];
    var records = [];
  exampleSocket.addEventListener('message', function (mEvent) {
    if (JSON.parse(mEvent.data).message === 'RequestStarted') {
        let requestStarted = ((JSON.parse(mEvent.data).head.fields))
        header.push(requestStarted)
    }  else {
        let requestRecords = ((JSON.parse(mEvent.data).records.data));
        records.push(requestRecords)
   }
   var data = records[0]
   var data1 = records[0]
   console.log(data)
   console.log(data1)

   for (var i = 0; i < data.length; i++){
    xPoints.push(data[i]["time"])
    // Calculate processing time
    if(data[i].vals.length !== 21){
      return false
    }
    else {
      pAnn.push(data[i].vals[0])
      pWH.push(data[i].vals[1])
      pDS.push(data[i].vals[2])
      pSep.push(data[i].vals[3])
      pDiff.push(data[i].vals[4])
      gasTemp.push(data[i].vals[5])
      gasRate.push(data[i].vals[6])
      waterRate.push(data[i].vals[7])
      oilRate.push(data[i].vals[8])
      cumWater.push(data[i].vals[9])
      cumOil.push(data[i].vals[10])
      gasPrevint.push(data[i].vals[11])
      waterLevel.push(data[i].vals[12])
      oilLevel.push(data[i].vals[13])
      waterVol.push(data[i].vals[14])
      oilVol.push(data[i].vals[15])
      choke.push(data[i].vals[16])
      gasGravity.push(data[i].vals[17])
      oilGravity.push(data[i].vals[18])
      shrinkage.push(data[i].vals[19])
      chlorides.push(data[i].vals[20])
      }

    } // end of for loop
  }) // end of webSocket call
} // end of componentDidMount


render() {


    return (
        <div>
        <Plot
        data={pressureChokeTrace} 
        layout={pressureChokeProperties}
        />


        <Plot 
        data={pressureTempTrace} 
        layout={pressureTempProperties}
        />


        <Plot
        data={flowrateTrace}
        layout={flowrateProperties }
        />



        <Plot
        data={tankLevelTrace}
        layout={tankLevelProperties}
      />          
      </div>
    )
  }
}
