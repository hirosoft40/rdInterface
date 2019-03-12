import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import "./MainGraph.css";
import { Grid, Row, Col } from "react-flexbox-grid";
import LiquidGauge from "../Gauge/LiquidGauge";
import PlotCore from "../Plot/Plot";

function MainGraph(props) {
  
  const waterLevel = props.waterLevel[props.waterLevel.length - 1];
  const waterVolume = props.waterVolume[props.waterVolume.length - 1];
  const oilLevel = props.oilLevel[props.oilLevel.length - 1];
  const oilVolume = props.oilVolume[props.oilVolume.length - 1];

  return (
    // FLEXBOX GRID
    <Grid fluid className="grid">
      <div>{!props ? <h1>Loading.....</h1> : null}</div>
      {/* FIRST ROW */}
      <Row className="gridRow">
        {/* PRESSURE VS CHOKE PLOT */}
        <Col xs={12} sm={12} md={6} lg={6}>
          <Card className="mainCard">
            <CardContent>
              <PlotCore
                yaxis1="Pressure (PSI)"
                yaxis1range={[0, 5000]} //Sets parameters from range to display on yaxis (left)
                yaxis2="Choke Size (64ths)"
                yaxis2range={[0, 64]} //Sets parameters for range to display on yaxis (right)
                plotparam1={"Annular: " + props.pAnn[props.pAnn.length - 1]}
                plotvalue1x={props.dtime}
                plotvalue1y={props.pAnn}
                plotparam2={"Wellhead: " + props.pWH[props.pWH.length - 1]}
                plotvalue2x={props.dtime}
                plotvalue2y={props.pWH}
                plotparam3={"DS of Choke: " + props.pDS[props.pDS.length - 1]}
                plotvalue3x={props.dtime}
                plotvalue3y={props.pDS}
                plotparam4={"Separator: " + props.pSep[props.pSep.length - 1]}
                plotvalue4x={props.dtime}
                plotvalue4y={props.pSep}
                plotparam5={
                  "Choke Size: " + props.choke[props.choke.length - 1]
                }
                plotvalue5x={props.dtime}
                plotvalue5y={props.choke}
                yaxis="y2" // This is to display choke values along the right y axis
              />
            </CardContent>
            <CardActions>Graph Captions</CardActions>
          </Card>
        </Col>

        {/* GAS, OIL & WATER RATE */}
        <Col xs={12} sm={12} md={6} lg={6}>
          <Card className="mainCard">
            <CardContent>
              <PlotCore
                yaxis1="Gas mfcd / Oil bpd / Water bpd "
                yaxis1range={[0, 10000]}
                yaxis2="" // Doesn't need 2nd one
                plotparam1={
                  "Gas Rate: " + props.gasRate[props.gasRate.length - 1]
                }
                plotvalue1x={props.dtime}
                plotvalue1y={props.gasRate}
                plotparam2={
                  "Oil Rate: " + props.oilRate[props.oilRate.length - 1]
                }
                plotvalue2x={props.dtime}
                plotvalue2y={props.oilRate}
                plotparam3={
                  "Water Rate: " + props.waterRate[props.waterRate.length - 1]
                }
                plotvalue3x={props.dtime}
                plotvalue3y={props.waterRate}
                plotparam4 = {"Cum Water: " +  props.cumWater[props.cumWater.length -1]} 
                plotvalue4x
                plotvalue4y
                plotparam5 = {"Cum Oil: " +  props.cumOil[props.cumOil.length -1]} 
                plotvalue5x
                plotvalue5y
              />
            </CardContent>
            <CardActions>Graph Captions</CardActions>
          </Card>
        </Col>

        <Col xs={12} sm={12} md={2} lg={2}>
          <h3>Water Tank 1</h3>
          <LiquidGauge
            val={waterLevel}
            key={waterLevel}
            name={"Water Level"}
            unit={"in"}
          />
          <LiquidGauge
            val={waterVolume}
            key={waterVolume}
            name={"Water Volume"}
            unit={"bbl"}
          />
          <h4>Oil Tank 1</h4>
          <LiquidGauge
            val={oilLevel}
            key={oilLevel}
            name={"Oil Level"}
            unit={"in"}
          />
          <LiquidGauge
            val={oilVolume}
            key={oilVolume}
            name={"Oil Volume"}
            unit={"bbl"}
          />
        </Col>
      </Row>

      {/* SECOND ROW */}
      <Row className="gridRow">
        {/* SEPARATOR PRESSURE VS DIFFERENTIAL PRESSURE IN H20 & GAS TEMPERATURE */}
        <Col xs={12} sm={12} md={6} lg={6}>
          <Card className="mainCard">
            <CardContent>
              <PlotCore
                yaxis1="Seperator Pressure (PSI)"
                yaxis1range={[0, 2000]}
                yaxis2="Diff Pres in H20 / Gas Temp (F)"
                yaxis2range={[0, 400]}
                plotparam1={
                  "Separator Pressure: " + props.pSep[props.pSep.length - 1]
                }
                plotvalue1x={props.dtime}
                plotvalue1y={props.pSep}
                plotparam2={
                  "Differential Pressure: " +
                  props.pDiff[props.pDiff.length - 1]
                }
                plotvalue2x={props.dtime}
                plotvalue2y={props.pDiff}
                plotparam3={
                  "Gas Temperature: " + props.gasTemp[props.gasTemp.length - 1]
                }
                plotvalue3x={props.dtime}
                plotvalue3y={props.gasTemp}
                yaxis="y2" // To display 3rd Parameter information along the right y axis
                plotparam4
                plotvalue4x
                plotvalue4y
                plotparam5
                plotvalue5x
                plotvalue5y
              />
            </CardContent>
            <CardActions>Graph Captions</CardActions>
          </Card>
        </Col>

        {/* OIL & WATER LEVEL */}
        <Col xs={12} sm={12} md={6} lg={6}>
          <Card className="mainCard">
            <CardContent>
              <PlotCore
                  yaxis1 = 'Oil Level (in) / Water Level (in)' yaxis1range = {[0,100]}
                  yaxis2 = ''                                  // Doesn't need 2nd one
                  plotparam1 = {'Water Tank Level: ' + props.waterLevel[props.waterLevel.length-1]}   plotvalue1x = {props.dtime}
                                                                                                      plotvalue1y = {props.waterLevel}
                  plotparam2 = {'Oil Tank Level: ' + props.oilLevel[props.oilLevel.length-1]}         plotvalue2x = {props.dtime}
                                                                                                      plotvalue2y = {props.oilLevel}
                  plotparam3                                  plotvalue3x
                                                              plotvalue3y
                  plotparam4                                  plotvalue4x
                                                              plotvalue4y
                  plotparam5                                  plotvalue5x
                                                              plotvalue5y
                  />
                </CardContent>
              <CardActions>Graph Captions</CardActions>
            </Card>
        </Col >

        {/* GAUGES LIVE HERE */}
        {/* <Col xs={12} sm={12} md={2} lg={2}>
          <LiquidGauge  val = {this.props.level_w}
                        name = {'Water Level'}/>
          <LiquidGauge  val = {props.vol_w}
                        name = {'Water Volume'}/>
          <LiquidGauge  val = {this.props.vol_o}
                        name = {'Water Level'}/>
        </Col> */}
      </Row>
    </Grid>
  );
}

export default MainGraph;
