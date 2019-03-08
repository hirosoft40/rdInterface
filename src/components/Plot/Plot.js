import React from 'react';
import Plot from 'react-plotly.js';

class PlotCore extends React.Component {
    render() {

        return (
            <Plot
                data={[
                {
                    name: this.props.plotparam1,
                    x: this.props.plotvalue1x,
                    y: this.props.plotvalue1y,
                    type: 'scatter',
                    mode: 'lines',
                    marker: {color: 'blue'}
                },{
                    name: this.props.plotparam2,
                    x: this.props.plotvalue2x,
                    y: this.props.plotvalue2y,
                    type: 'scatter',
                    mode: 'lines',
                    line: {color: 'red'},
                    yaxis: this.props.yaxis
                },{
                    name: this.props.plotparam3,
                    x: this.props.plotvalue3x,
                    y: this.props.plotvalue3y,
                    type: 'scatter',
                    mode: 'lines',
                    line: {color: 'green'},
                    yaxis: this.props.yaxis
                },{
                    name: this.props.plotparam4,
                    x: this.props.plotvalue4x,
                    y: this.props.plotvalue4y,
                    type: 'scatter',
                    mode: 'lines',
                    line: {color: 'lightblue'},
                    yaxis: this.props.yaxis
                },{
                    name: this.props.plotparam5,
                    x: this.props.plotvalue5x,
                    y: this.props.plotvalue5y,
                    type: 'scatter',
                    mode: 'lines',
                    yaxis: this.props.yaxis
                }

                ]}
                layout={ 
                    {
                    //Transparency for the Plot
                    paper_bgcolor: 'rgba(0,0,0,0)',
                    plot_bgcolor: 'rgba(0,0,0,0)', 
                    autosize:true,

                    //Margins Titles
                    xaxis: {title: '', //This holds the time label which we don't need
                            autorange: true,
                            showgrid: true,
                            gridcolor: '#555555',
                            color: 'white',
                            type: 'time',
                        },
                            // You need to set this axis type to time
                            // Read https://plot.ly/javascript/reference/#layout-xaxis-tick0

                    yaxis: {title: this.props.yaxis1,
                            titlefont: {
                                family: 'Arial, sans-serif',
                                size: 15,
                                color: 'white'
                            },
                            range: this.props.yaxis1range,
                            gridcolor: '#555555',
                            side: 'left', 
                            color: 'white',
                            //TICK FORMATTING
                            autotick: true,
                            ticks: 'inside',
                            tick0:1,
                            dtick: 25,
                            tickwidth: 3,
                            ticklen: 3,
                            tickfont: {
                                family: 'Arial, serif',
                                size: 10.5,
                                color: 'white'
                            }
                            },

                    yaxis2: {title: this.props.yaxis2,
                            titlefont: {
                                family: 'Arial, sans-serif',
                                size: 15,
                                color: 'white'
                            }, 
                            overlaying: 'y',
                            showgrid: false,
                            range: this.props.yaxis2range,
                            side:'right', 
                            color: 'white',
                            //TICK FORMATTING
                            autotick: true,
                            ticks: 'inside',
                            tick0:0,
                            dtick: 0.25,
                            tickwidth: 3,
                            ticklen: 3,
                            tickfont: {
                                family: 'Arial, serif',
                                size: 10.5,
                                color: 'white'
                            }
                        }, 

                    //Margin Values
                    margin: {
                            l: 45,
                            r: 40,
                            b: 0,
                            t: 10,
                            pad: 0
                        },
                    // automargin:true,

                    //Plot Legend Parameters
                    legend: {
                        traceorder: 'normal',
                        font: {
                            family: 'Arial, sans-serif',
                            size: 15,
                            color: '#fff'},
                        bgcolor: 'rgba(0,0,0,0)',
                        bordercolor: 'rgba(0,0,0,0)',
                        borderwidth: 2,
                        orientation: 'h',
                        x: 0.1,
                        y: -0.1,
                            }
                        } 
                }
                useResizeHandler={true}
                responsive={true}
                style={{width: "100%", height: "100%"}}
            />
        );
    }
}

export default PlotCore