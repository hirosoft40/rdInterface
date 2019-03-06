import React, { Component } from 'react'
import Plot from 'react-plotly.js';


export default class Graph extends Component {



  render() {
    return (
      <div>
          
        <Plot
        data={[
          { name: "Annular Pressure",
            x: [1, 2, 3],
            y: [2, 3, 3],
            type: 'scatter',
            mode: 'lines',
            marker: {color: 'blue'},
          },
          { name: "Wellhead Pressure",
            x: [1, 2, 3],
            y: [2, 3, 3],
            type: 'scatter',
            mode: 'lines',
            line: {color: 'red'},
          },
          { name: "DS of Choke Pressure",
            x: [1, 2, 3],
            y: [2, 3, 3],
            type: 'scatter',
            mode: 'lines',
            line: {color: 'green'},
          },
          { name: "Separator Pressure",
            x: [1, 2, 3],
            y: [2, 3, 3],
            type: 'scatter',
            mode: 'lines',
            line: {color: 'lightblue'},
          }]}
        layout={ { xaxis: {title: 'Time', autorange: 'true'}, yaxis: {title: 'Pressure (PSI)'},width: 675, height: 506, title: 'Pressure based on Choke Size'} }
      />


        <Plot
        data={[
          { name: "Separator Pressure",
            x: [1, 2, 3],
            y: [2, 3, 3],
            type: 'scatter',
            mode: 'lines',
            marker: {color: 'purple'},
          },
          { name: "Differential Pressure",
            x: [1, 2, 3],
            y: [2, 3, 3],
            type: 'scatter',
            mode: 'lines',
            line: {color: 'orange'},
          },
          { name: "Gas Temperature",
            x: [1, 2, 3],
            y: [2, 3, 3],
            type: 'scatter',
            mode: 'lines',
            line: {color: 'pink'},
          }]}
        layout={ { xaxis: {title: 'Time', autorange: 'true'}, yaxis: {title: ' Seperator Pressure (PSI)'},width: 675, height: 506, title: 'Seperator & Differential Pressure based on Gas Temperature (F)'} }
      />


        <Plot
        data={[
          { name: "Gas Rate",
            x: [1, 2, 3],
            y: [2, 3, 3],
            type: 'scatter',
            mode: 'lines',
            marker: {color: 'red'},
          },
          { name: "Oil Rate",
            x: [1, 2, 3],
            y: [2, 3, 3],
            type: 'scatter',
            mode: 'lines',
            line: {color: 'green'},
          },
          { name: "Water Rate",
            x: [1, 2, 3],
            y: [2, 3, 3],
            type: 'scatter',
            mode: 'lines',
            line: {color: 'blue'},
          },
          { name: "Cum Oil",
            x: [1, 2, 3],
            y: [2, 3, 3],
            type: 'scatter',
            mode: 'lines',
            line: {color: 'darkgreen'}
        },
            { name: "Cum Water",
            x: [1, 2, 3],
            y: [2, 3, 3],
            type: 'scatter',
            mode: 'lines',
            line: {color: 'darkblue'}
          }]}
        layout={ { xaxis: {title: 'Time', autorange: 'true'}, yaxis: {title: 'Rates (mcfd, bpd)'},width: 675, height: 506, title: 'Flow Rates over Time'} }
      />



        <Plot
        data={[
          { name: "Water Tank Level",
            x: [1, 2, 3],
            y: [2, 3, 3],
            type: 'scatter',
            mode: 'lines',
            marker: {color: 'blue'},
          },
          { name: "Oil Tank Level",
            x: [1, 2, 3],
            y: [2, 3, 3],
            type: 'scatter',
            mode: 'lines',
            line: {color: 'green'},
          },
          { name: "Water Tank Volume",
            x: [1, 2, 3],
            y: [2, 3, 3],
            type: 'scatter',
            mode: 'lines',
            line: {color: 'lightblue'},
          },
          { name: "Oil Tank Volume",
            x: [1, 2, 3],
            y: [2, 3, 3],
            type: 'scatter',
            mode: 'lines',
            line: {color: 'lightgreen'},
          }]}
        layout={ { xaxis: {title: 'Time', autorange: 'true'}, yaxis: {title: 'Tank Level(bbl)'},width: 675, height: 506, title: 'Pressure based on Choke Size'} }
      />
  



        
      </div>
    )
  }
}
