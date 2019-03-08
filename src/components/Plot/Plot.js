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
                            size: 15,
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
                useResizeHandler={true}
                responsive={true}
                style={{width: "100%", height: "100%"}}
            />
        );
    }
}

export default PlotCore