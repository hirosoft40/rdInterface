// Chart 1 - Pressure level  based on Choke size

// Data Traces
var trace1 = {
    name: 'Annular Pressure',
    x: [1, 2, 3],
    y: [2, 4, 3],
    type: 'scatter',
    mode: 'lines',
    marker: {color: 'blue'}
};

var trace2 = {
    name: 'Wellhead Pressure',
    x: [1, 2, 3],
    y: [1, 2, 5],
    type: 'scatter',
    mode: 'lines',
    line: {color: 'red'}
};

var trace3 = {
    name: "DS of Choke Pressure",
    x: [1, 2, 3],
    y: [2.2, 1.3, 1.5],
    type: 'scatter',
    mode: 'lines',
    line: {color: 'green'}
};

var trace4 = {
    name: "Separator Pressure",
    x: [1, 2, 3],
    y: [2, 4, 2],
    type: 'scatter',
    mode: 'lines',
    line: {color: 'lightblue'},
    yaxis: 'y2'
}

var trace5 = {
    name: "Choke 64ths",
    x: [],
    y: [],
    type: 'scatter',
    mode: 'lines',
    yaxis: 'y2'
}

var pressureChokeTrace = [trace1, trace2, trace3, trace4, trace5];


// Layout Properties
var pressureChokeProperties = {
    xaxis: {title: 'Time', autorange: 'true'}, 
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
            }}

export { pressureChokeTrace, pressureChokeProperties }


