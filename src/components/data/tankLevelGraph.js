// Tank Level over time
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

export { tankLevelTrace }