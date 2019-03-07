import React, { Component } from 'react'
import Plot from 'react-plotly.js';
import { pressureChokeTrace, pressureChokeProperties }  from './data/pressureChokeGraph';
import { pressureTempTrace , pressureTempProperties } from './data/pressureTempGraph';
import { flowrateTrace, flowrateProperties } from './data/flowratesGraph';
import { tankLevelTrace, tankLevelProperties } from './data/tankLevelGraph'


export default class Graph extends Component {


componentDidMount(){
    var exampleSocket = new WebSocket('ws://rdsfastrack.com/backend/', ['com.campbellsci.webdata'])

    exampleSocket.addEventListener('open', function (event) {
        console.log('Hello Server!')
        exampleSocket.send('{"message":"AddRequests","requests":[{"uri":"LNDB:8782_Flowback","mode":"most-recent","p1":"10","transaction":1,"order":"collected"}]}')
      })
    
    // ***SIMPLE CALL***
    exampleSocket.addEventListener('message', function (mEvent) {  
        var results = (JSON.parse(mEvent.data));
    
        // var data = results.records.data
        var output = results.records.data
        console.log(output)

        var xPoints = []
        // Fields with definition and index
        var pAnn = []; // annular pressure (0)
        var pWH = []; // wellhead pressure (1)
        var pDS = []; // ds of choke pressure (2)
        var pSep = []; // separator pressure (3)
        var pDiff = []; // differential pressure (4)
        var tG = []; //
        var gasRate = []; // gas rate (6)
        var waterRate = []; // water rate (7)
        var oilRate = []; // oil rate (8)
        var cumWater= []; // cumulative water (9)
        var cumOil = []; // cumalative oil (10)
        var gasPrevint = []; // 
        var waterLevel = []; // water level (12)
        var oilLevel = []; // oil level (13)
        var waterVol = []; // water volume (14)
        var oilVol = []; // oil volume (15)
        var choke = []; // choke (16)
        var gasGravity = []; // gas gravity (17)
        var oilGravity = []; // oil gravity (18)
        var shrinkage = []; // shrinkage (19)
        var chlorides = []; // chlorides (20)

        for (var i = 0; i < output.length; i++){
            xPoints.push(output[i]["time"])

            if(output[i].vals.length === 21){
                pAnn.push(output[i].vals[0])
                pWH.push(output[i].vals[1])
                pDS.push(output[i].vals[2])
                pSep.push(output[i].vals[3])
                pDiff.push(output[i].vals[4])
                tG.push(output[i].vals[5])
                gasRate.push(output[i].vals[6])
                waterRate.push(output[i].vals[7])
                waterRate.push(output[i].vals[8])
                cumWater.push(output[i].vals[9])
                cumOil.push(output[i].vals[10])
                gasPrevint.push(output[i].vals[11])
                waterLevel.push(output[i].vals[12])
                oilLevel.push(output[i].vals[13])
                waterVol.push(output[i].vals[14])
                oilVol.push(output[i].vals[15])
                choke.push(output[i].vals[16])
                gasGravity.push(output[i].vals[17])
                oilGravity.push(output[i].vals[18])
                shrinkage.push(output[i].vals[19])
                chlorides.push(output[i].vals[20])
            }
            else(console.log("not 21"))
        }
    })

}


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
