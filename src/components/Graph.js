import React, { Component } from 'react'
import Plot from 'react-plotly.js';
import { pressureChokeTrace, pressureChokeProperties }  from './data/pressureChokeGraph';
import { pressureTempTrace , pressureTempProperties } from './data/pressureTempGraph';
import { flowrateTrace, flowrateProperties } from './data/flowratesGraph';
import { tankLevelTrace, tankLevelProperties } from './data/tankLevelGraph'


export default class Graph extends Component {

// componentDidMount(){
// var exampleSocket = new WebSocket('ws://rdsfastrack.com/backend/', ['com.campbellsci.webdata'])

// exampleSocket.addEventListener('open', function (event) {
//     console.log('Hello Server!')
//     exampleSocket.send('{"message":"AddRequests","requests":[{"uri":"LNDB:8782_Flowback","mode":"most-recent","p1":"10","transaction":1,"order":"collected"}]}')
//   })

// // ***SIMPLE CALL***
//   exampleSocket.addEventListener('message', function (mEvent) {  
//     //  console.log(JSON.parse(mEvent.data));
//      console.log(JSON.parse(mEvent.data.message));
//    })

// }



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
