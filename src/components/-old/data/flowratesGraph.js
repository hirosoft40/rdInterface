// Flow rates over time

// Data Traces
var trace1 = {
    name: "Gas Rate",
    x: [1, 2, 3],
    y: [2, 3, 3],
    type: 'scatter',
    mode: 'lines',
    marker: {color: 'red'}
}

var trace2 = {
    name: "Oil Rate",
    x: [1, 2, 3],
    y: [2, 3, 3],
    type: 'scatter',
    mode: 'lines',
    line: {color: 'green'}
}

var trace3 = {
    name: "Water Rate",
    x: [1, 2, 3],
    y: [2, 3, 3],
    type: 'scatter',
    mode: 'lines',
    line: {color: 'blue'}
}

var trace4 = {
    name: "Cum Oil",
    x: [1, 2, 3],
    y: [2, 3, 3],
    type: 'scatter',
    mode: 'lines',
    line: {color: 'darkgreen'}
}

var trace5 = {
    name: "Cum Water",
    x: [1, 2, 3],
    y: [2, 3, 3],
    type: 'scatter',
    mode: 'lines',
    line: {color: 'darkblue'}
}

var flowrateTrace = [trace1, trace2, trace3, trace4, trace5]

// Layout Properties

var flowrateProperties = {
    xaxis: {title: 'Time', autorange: 'true'}, 
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
} 



export { flowrateTrace, flowrateProperties }