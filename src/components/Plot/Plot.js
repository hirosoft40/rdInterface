import React from 'react';
import Plot from 'react-plotly.js';

class PlotCore extends React.Component {
    render() {


        return (
            <Plot
                data={[
                {
                    name: this.props.plotparam1,
                    x: [1, 2, 3],
                    y: [2, 4, 3],
                    type: 'scatter',
                    mode: 'lines',
                    marker: {color: 'blue'}
                },{
                    name: this.props.plotparam2,
                    x: [1, 2, 3],
                    y: [1, 2, 5],
                    type: 'scatter',
                    mode: 'lines',
                    line: {color: 'red'}
                },{
                    name: this.props.plotparam3,
                    x: [1, 2, 3],
                    y: [2.2, 1.3, 1.5],
                    type: 'scatter',
                    mode: 'lines',
                    line: {color: 'green'}
                },{
                    name: this.props.plotparam4,
                    x: [1, 2, 3],
                    y: [2, 4, 2],
                    type: 'scatter',
                    mode: 'lines',
                    line: {color: 'lightblue'},
                    yaxis: 'y2'
                },{
                    name: this.props.plotparam5,
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
                    xaxis: {title: '', autorange: 'true', color: 'white'},
                    yaxis: {title: this.props.yaxis1, side: 'left', color: 'white'},
                    yaxis2: {title: this.props.yaxis2, overlaying: 'y', side:'right', color: 'white'}, 
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
                        orientation: 'v',
                        x: 0.1,
                        y: -0.4,
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

export default PlotCore