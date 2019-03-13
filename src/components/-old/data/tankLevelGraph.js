// Tank Level over time

// Data Traces
var trace1 = {
    name: "Water Tank Level",
    x: [1, 2, 3],
    y: [2, 3, 3],
    type: 'scatter',
    mode: 'lines',
    marker: {color: 'blue'}
}

var trace2 = {
    name: "Oil Tank Level",
    x: [1, 2, 3],
    y: [2, 3, 3],
    type: 'scatter',
    mode: 'lines',
    line: {color: 'green'}
}

var trace3 = {
    name: "Water Tank Volume",
    x: [1, 2, 3],
    y: [2, 3, 3],
    type: 'scatter',
    mode: 'lines',
    line: {color: 'lightblue'}
}

var trace4 = {
    name: "Oil Tank Volume",
    x: [1, 2, 3],
    y: [2, 3, 3],
    type: 'scatter',
    mode: 'lines',
    line: {color: 'lightgreen'}
}

var tankLevelTrace = [trace1, trace2, trace3, trace4]

// Layout Properties
var tankLevelProperties= { 
    xaxis: {title: 'Time', autorange: 'true'}, 
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
        y: -0.2}} 

export {tankLevelTrace, tankLevelProperties }