import React, { Component } from 'react'
import Plot from 'react-plotly.js';
import  pressureChokeTrace  from './data/pressureChokeGraph';
import { pressureTempTrace } from './data/pressureTempGraph';
import { flowrateTrace} from './data/flowratesGraph';
import { tankLevelTrace } from './data/tankLevelGraph'


export default class Graph extends Component {


render() {


    return (
        <div>
        <Plot 
        data={pressureChokeTrace} 
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
        data={[pressureTempTrace]} 
        layout={ 
            { xaxis: {title: 'Time', autorange: 'true'}, 
            yaxis: {title: 'Seperator Pressure (PSI)', side: 'left'}, 
            yaxis2: {title: 'Diff. Pressure (H20), Gas Temp. (°F)', overlaying: 'y', side:'right'},
            width: 675, 
            height: 506, 
            title: 'Seperator & Differential Pressure based on Gas Temp(°F)',
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
        data={[flowrateTrace]}
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
        data={[tankLevelTrace]}
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
