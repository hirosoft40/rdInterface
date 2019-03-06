import React from "react";
import Plot from "react-plotly.js";

// test data to display graph
let data = 480;

class Gouge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: ""
    };
  }

  componentDidUpdate() {
    if (data > 200 && data < 400) {
      return this.setState({
        color: "yellow"
      });
    } else if (data > 400) {
      return this.setState({
        color: "red"
      });
    } else if (data < 200) {
      return this.setState({
        color: "blue"
      });
    }
  }

  render() {
    var trace1 = {
      x: [1],
      //   y: [data],
      y: [480],
      type: "bar",
      width: 0.3,
      //   marker: { color: this.state.color }
      marker: { color: "#fff" }
    };

    var trace2 = {
      x: [1],
      y: [98],
      yaxis: "y2",
      type: "bar",
      width: 0.3,
      //   marker: { color: this.state.color }
      marker: { color: "#f4cd00" }
    };

    var data = [trace1, trace2];

    return (
      <Plot
        data={data}
        layout={{
          autosize: true,
          paper_bgcolor: "#184787",
          plot_bgcolor: "#184787",
          width: 120,
          height: 400,
          yaxis: {
            autotick: false,
            ticks: "inside",
            tick0: 0,
            dtick: 50,
            ticklen: 500,
            tickwidth: 1,
            // tickcolor: "#fff",
            titlefont: { color: "#fff" },
            tickfont: { color: "#fff" },
            gridwidth: 0.3
          },
          yaxis2: {
            titlefont: { color: "#f4cd00" },
            tickfont: { color: "#f4cd00" },
            overlaying: "y",
            side: "right",
            gridwidth: 0.3
          },
          margin: {
            b: 25,
            l: 25,
            r: 25,
            t: 30
          },
          barmode: "group",
          bargap: 0.15,
          bargroupgap: 0.1
        }}
      />
    );
  }
  // constructor(props) {
  //     super(props);
  //     this.state = { data: [], layout: {}, frames: [], config: {} };
  // }
  // render() {
  //     return (
  //         <Plot
  //             data={this.state.data}
  //             layout={this.state.layout}
  //             frames={this.state.frames}
  //             config={this.state.config}
  //             onInitialized={(figure) => this.setState(figure)}
  //             onUpdate={(figure) => this.setState(figure)}
  //         />
  //     );
  // }
}

export default Gouge;
