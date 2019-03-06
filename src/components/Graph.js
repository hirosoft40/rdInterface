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
            y: [2, 4, 3],
            type: 'scatter',
            mode: 'lines',
            marker: {color: 'blue'},
            },
            { name: "Wellhead Pressure",
            x: [1, 2, 3],
            y: [1, 2, 5],
            type: 'scatter',
            mode: 'lines',
            line: {color: 'red'},
            },
            { name: "DS of Choke Pressure",
            x: [1, 2, 3],
            y: [2.2, 1.3, 1.5],
            type: 'scatter',
            mode: 'lines',
            line: {color: 'green'},
            },
            { name: "Separator Pressure",
            x: [1, 2, 3],
            y: [2, 4, 2],
            type: 'scatter',
            mode: 'lines',
            line: {color: 'lightblue'},
            yaxis: 'y2'
            },
            { name: "Choke 64ths",
            x: [],
            y: [],
            type: 'scatter',
            mode: 'lines',
            yaxis: 'y2'
            }
        ]} 
        layout={ 
            { xaxis: {title: 'Time', autorange: 'true'}, 
            yaxis: {title: 'Pressure (PSI)', side: 'left'}, 
            yaxis2: {title: 'Choke Size (64ths)', overlaying: 'y', side:'right'},
            width: 675, 
            height: 506, 
            title: 'Pressure based on Choke Size',
            legend: {
                traceorder: 'normal',
                font: {
                    family: 'sans-serif',
                    size: 12,
                    color: '#000'},
                bgcolor: '#E2E2E2',
                bordercolor: '#FFFFFF',
                borderwidth: 2,
                orientation: 'h',
                y: -0.2,
            }} }
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
            },
            { name: "Differential Pressure, Gas Temperature",
            x: [],
            y: [],
            type: 'scatter',
            mode: 'lines',
            line: {color: 'black'},
            yaxis: 'y2'
            }
        ]}
        layout={ 
            { xaxis: {title: 'Time', autorange: 'true'}, 
            yaxis: {title: 'Seperator Pressure (PSI)'},
            yaxis2: {title: 'Diff.Pressure (H2O), Gas Temp. (°F)', side: 'right'},
            width: 675, 
            height: 506, 
            title: 'Seperator & Differential Pressure based on Gas Temperature (°F)',
            legend: {
                traceorder: 'normal',
                font: {
                    family: 'sans-serif',
                    size: 12,
                    color: '#000'},
                bgcolor: '#E2E2E2',
                bordercolor: '#FFFFFF',
                borderwidth: 2,
                orientation: 'h',
                y: -0.2,
            }
        } }
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
        layout={ { xaxis: {title: 'Time', autorange: 'true'}, 
        yaxis: {title: 'Rates (mcfd, bpd)'},
        width: 675,
        height: 506, 
        title: 'Flow Rates over Time',
        legend: {
            traceorder: 'normal',
            font: {
                family: 'sans-serif',
                size: 12,
                color: '#000'},
            bgcolor: '#E2E2E2',
            bordercolor: '#FFFFFF',
            borderwidth: 2,
            orientation: 'h',
            y: -0.2}
        } }
        
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
        layout={ { xaxis: {title: 'Time', autorange: 'true'}, 
        yaxis: {title: 'Tank Level(bbl)'},
        width: 675, 
        height: 506, 
        title: 'Pressure based on Choke Size',
        legend: {
            traceorder: 'normal',
            font: {
                family: 'sans-serif',
                size: 12,
                color: '#000'},
            bgcolor: '#E2E2E2',
            bordercolor: '#FFFFFF',
            borderwidth: 2,
            orientation: 'h',
            y: -0.2}} }
      />          
      </div>
    )
  }
}
