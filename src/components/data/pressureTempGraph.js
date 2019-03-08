// Seperator Pressure and Differential Pressure (H2O) with Gas Temperature

// Data Traces
var trace1 = {
    name: "Separator Pressure",
    x: [1, 2, 3],
    y: [2, 4, 3],
    type: 'scatter',
    mode: 'lines',
    marker: {color: 'blue'}
}

var trace2 = {
    name: "Differential Pressure",
    x: [1, 2, 3],
    y: [1, 2, 5],
    type: 'scatter',
    mode: 'lines',
    line: {color: 'orange'}
}

var trace3 = {
    name: "Gas Temperature",
    x: [1, 2, 3],
    y: [2.2, 1.3, 1.5],
    type: 'scatter',
    mode: 'lines',
    line: {color: 'pink'}
}

var trace4 = {
    name: "Differential Pressure & Gas Temperature",
    x: [],
    y: [],
    type: 'scatter',
    mode: 'lines',
    yaxis: 'y2'
}

var pressureTempTrace = [trace1, trace2, trace3, trace4]



// Layout Properties
var pressureTempProperties = { 
    xaxis: {title: 'Time', autorange: 'true'}, 
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
}}


export { pressureTempTrace, pressureTempProperties }

