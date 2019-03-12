// ==== REACT COMPONENT to display LiquidGauge ====
// Libracy used:
// react-liquid-gauge : https://github.com/trendmicro-frontend/react-liquid-gauge
// Data IN: props value of Water Level, Volume and Oil Level, Volume
// Data OUT: n/a (display only)
// 3/8 TODO:
//    (1) Test with real data.
//    (2) Check: data unit. What to display and decimal points?
//==============

import { color } from "d3-color";
import { interpolateRgb } from "d3-interpolate";
import React, { Component } from "react";
import LiquidFillGauge from "react-liquid-gauge";

class LiquidGauge extends Component {
  state = {
    value: 0,
    name: "",
    unit: ""
  };
  startColor = "#6495ed"; // cornflowerblue
  endColor = "#dc143c"; // crimson

  componentDidMount() {
    // console.log(this.props.val);
    this.setState({
      value: this.props.val,
      name: this.props.name,
      unit: this.props.unit
    });
  }

  render() {
    const radius = 68;
    const interpolate = interpolateRgb(this.startColor, this.endColor);
    const fillColor = interpolate(this.state.value / 100);
    const gradientStops = [
      {
        key: "0%",
        stopColor: color(fillColor)
          .darker(0.5)
          .toString(),
        stopOpacity: 1,
        offset: "0%"
      },
      {
        key: "50%",
        stopColor: fillColor,
        stopOpacity: 0.75,
        offset: "50%"
      },
      {
        key: "100%",
        stopColor: color(fillColor)
          .brighter(0.5)
          .toString(),
        stopOpacity: 0.5,
        offset: "100%"
      }
    ];

    //=== display data ====
    return (
      <div>
        <div style={{ color: "white", textAlign: "center" }}>
          {this.state.name}
        </div>
        <LiquidFillGauge
          style={{ margin: "0 auto" }}
          width={radius * 2}
          height={radius * 2}
          value={this.props.val}
          percent={this.state.unit}
          textSize={1}
          textOffsetX={0}
          textOffsetY={0}
          textRenderer={props => {
            // console.log("props", props);
            const value = props.value;
            const radius = Math.min(props.height / 2, props.width / 2);
            const textPixels = (props.textSize * radius) / 3;
            const valueStyle = {
              fontSize: textPixels
            };
            const percentStyle = {
              fontSize: textPixels * 0.6
            };

            return (
              <tspan>
                <tspan className="value" style={valueStyle}>
                  {value}
                </tspan>
                <tspan style={percentStyle}>{props.percent}</tspan>
              </tspan>
            );
          }}
          riseAnimation
          waveAnimation
          waveFrequency={2}
          waveAmplitude={1}
          gradient
          gradientStops={gradientStops}
          circleStyle={{
            fill: fillColor
          }}
          waveStyle={{
            fill: fillColor
          }}
          textStyle={{
            fill: color("#fff").toString(),
            fontFamily: "Arial"
          }}
          waveTextStyle={{
            fill: color("#fff").toString(),
            fontFamily: "Arial"
          }}
        />
      </div>
    );
    //===== end =====
  }
}

export default LiquidGauge;
