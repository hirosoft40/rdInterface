import React from 'react';
import Plot from 'react-plotly.js';

class PlotSample extends React.Component {
    render() {
        return (
            <Plot
                data={[
                {
                    name: 'Annular Pressure',
                    x: [1, 2, 3],
                    y: [2, 4, 3],
                    type: 'scatter',
                    mode: 'lines',
                    marker: {color: 'blue'}
                },{
                    name: 'Wellhead Pressure',
                    x: [1, 2, 3],
                    y: [1, 2, 5],
                    type: 'scatter',
                    mode: 'lines',
                    line: {color: 'red'}
                },{
                    name: "DS of Choke Pressure",
                    x: [1, 2, 3],
                    y: [2.2, 1.3, 1.5],
                    type: 'scatter',
                    mode: 'lines',
                    line: {color: 'green'}
                },{
                    name: "Separator Pressure",
                    x: [1, 2, 3],
                    y: [2, 4, 2],
                    type: 'scatter',
                    mode: 'lines',
                    line: {color: 'lightblue'},
                    yaxis: 'y2'
                },{
                    name: "Choke 64ths",
                    x: [],
                    y: [],
                    type: 'scatter',
                    mode: 'lines',
                    yaxis: 'y2'
                }

                ]}
                layout={ 
                    {
                    //Transparency for the Plot
                    paper_bgcolor: 'rgba(0,0,0,0)',
                    plot_bgcolor: 'rgba(0,0,0,0)', 
                    autosize:true,
                    //Margins Titles
                    xaxis: {title: 'Time', autorange: 'true', color: 'white'},
                    yaxis: {title: 'Pressure (PSI)', side: 'left', color: 'white'},
                    yaxis2: {title: 'Choke Size (64ths)', overlaying: 'y', side:'right', color: 'white'}, 
                    //Margin Values
                    margin: {
                            l: 45,
                            r: 55,
                            b: 5,
                            t: 20,
                            pad: 0
                        },
                    // automargin:true,

                    //Plot Legend Parameters
                    legend: {
                        traceorder: 'normal',
                        font: {
                            family: 'sans-serif',
                            size: 12,
                            color: '#fff'},
                        bgcolor: 'rgba(0,0,0,0)',
                        bordercolor: 'rgba(0,0,0,0)',
                        borderwidth: 2,
                        orientation: 'h',
                        y: -0.2,
                            }
                        } 
                }
                useResizeHandler
                responsive={true}
                style={{width: "100%", height: "100%"}}
            />
        );
    }
}

export default PlotSample