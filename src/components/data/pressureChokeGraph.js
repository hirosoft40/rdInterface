// Chart 1 - Pressure level  based on Choke size
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

export default pressureChokeTrace 

