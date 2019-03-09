import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";

// test data to display graph
//let data = 480;

function Gauge(props) {
  const { level_w, level_o, vol_w, vol_o } = props;
  //hooks
  const [color, setColor] = useState(props);

  // === creating bars start ===
  var lvl_o = {
    x: [1],
    y: level_o,
    type: "bar",
    width: 0.3,
    //   marker: { color: this.state.color }
    marker: { color: "#fff" }
  };

  var lvl_w = {
    x: [1],
    y: level_w,
    yaxis: "y2",
    type: "bar",
    width: 0.3,
    //   marker: { color: this.state.color }
    marker: { color: "#f4cd00" }
  };

  var vlm_o = {
    x: [1],
    y: vol_o,
    type: "bar",
    width: 0.3,
    //   marker: { color: this.state.color }
    marker: { color: "#fff" }
  };

  var vlm_w = {
    x: [1],
    y: vol_w,
    yaxis: "y2",
    type: "bar",
    width: 0.3,
    //   marker: { color: this.state.color }
    marker: { color: "#f4cd00" }
  };

  var oilData = [vlm_o, lvl_o];
  var waterData = [vlm_w, lvl_w];

  useEffect(() => {
    if (props.lvl_o > 60) {
      return setColor({ color: "red" });
    } else if (props.lvl_o > 40) {
      return setColor({ color: "yellow" });
    } else {
      return setColor({ color: "blue" });
    }
  }, [props]);

  // ==== how to use hook
  // function LoginComponent() {
  //   const [loginDetails, setLoginDetails] = useState({username: '', password: ''})
  //   return (
  //           <div>
  //               <form>
  //                   <input id='username' onInput={()=>setLoginDetails({username: this.value})} />
  //                   <input id='password' onInput={()=>setLoginDetails({password: this.value})} />
  //                   <button onClick={()=>handleLogin(loginDetails)}>Login</button>
  //               </form>
  //           </div>
  //   );
  // }

  const renderList = data => {
    return (
      <Plot
        data={data}
        layout={{
          autosize: true,
          paper_bgcolor: "#979797",
          plot_bgcolor: "#979797",
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
            titlefont: { color: "#184787" },
            tickfont: { color: "#184787" },
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

    return <div>{renderList(oilData)}</div>;
  };
}

export default Gauge;
