import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import "./MainGraph.css";
import { Grid, Row, Col } from "react-flexbox-grid";
// import LiquidGauge from "../Gauge/LiquidGauge";
import PlotCore from '../Plot/Plot'
import moment from 'moment';

function MainGraph(props) {
  console.log(props)
  return (
    // FLEXBOX GRID
    <Grid fluid className="grid">
      
      {/* FIRST ROW */}
      <Row className="gridRow">
        
        {/* PRESSURE VS CHOKE PLOT */}
        <Col xs={12} sm={12} md={5} lg={5}>
          <Card className="mainCard">
              <CardContent>
                  <PlotCore
                  yaxis1 ='Pressure (PSI)'                yaxis1range = {[0,5000]} //Sets parameters from range to display on yaxis (left)
                  yaxis2 ='Choke Size (64ths)'            yaxis2range = {[0,64]}  //Sets parameters for range to display on yaxis (right)
                  plotparam1 = 'Annular Pressure'         plotvalue1x = {props.dtime}
                                                          plotvalue1y = {props.pAnn}
                  plotparam2 = 'Wellhead Pressure'        plotvalue2x = {props.dtime}
                                                          plotvalue2y = {props.pWH}
                  plotparam3 = 'DS of Choke Pressure'     plotvalue3x = {props.dtime}
                                                          plotvalue3y = {props.pDS}
                  plotparam4 = 'Separator Pressure'       plotvalue4x = {props.dtime}
                                                          plotvalue4y = {props.pSep}
                  plotparam5 = 'Choke Size'               plotvalue5x = {props.dtime}
                                                          plotvalue5y = {props.choke}
                                                          yaxis = 'y2' // This is to display choke values along the right y axis

                  />
              </CardContent>
              <CardActions>Graph Captions</CardActions>
          </Card>
        </Col>
        
        {/* GAS, OIL & WATER RATE */}
        <Col xs={12} sm={12} md={5} lg={5}>
            <Card className="mainCard">
              <CardContent>
                  <PlotCore
                  yaxis1 = 'Gas mfcd / Oil bpd / Water bpd '  yaxis1range = {[0,10000]}
                  yaxis2 = ''                                 // Doesn't need 2nd one
                  plotparam1 = 'Gas Rate'                     plotvalue1x = {props.dtime}
                                                              plotvalue1y = {props.gasRate}
                  plotparam2 = 'Oil Rate'                     plotvalue2x = {props.dtime}
                                                              plotvalue2y = {props.oilRate}
                  plotparam3 = 'Water Rate'                   plotvalue3x = {props.dtime}
                                                              plotvalue3y = {props.waterRate}
                  plotparam4                                  plotvalue4x
                                                              plotvalue4y
                  plotparam5                                  plotvalue5x
                                                              plotvalue5y
                  />
              </CardContent>
              <CardActions>Graph Captions</CardActions>
            </Card>
        </Col>

        <Col xs={12} sm={12} md={2} lg={2}>

        </Col>
      </Row>
      
      {/* SECOND ROW */}
      <Row className="gridRow">
        
        {/* SEPARATOR PRESSURE VS DIFFERENTIAL PRESSURE IN H20 & GAS TEMPERATURE */}
        <Col xs={12} sm={12} md={5} lg={5}>
          <Card className="mainCard">
              <CardContent>
              <PlotCore
                  yaxis1 = 'Seperator Pressure (PSI)'         yaxis1range = {[0,2000]}
                  yaxis2 = 'Diff Pres in H20 / Gas Temp (F)'  yaxis2range = {[0,400]}
                  plotparam1 = 'Separator Pressure'           plotvalue1x = {props.dtime}
                                                              plotvalue1y = {props.pSep}
                  plotparam2 = 'Differential Pressure'        plotvalue2x = {props.dtime}
                                                              plotvalue2y = {props.pDiff}
                  plotparam3 = 'Gas Temperature'              plotvalue3x = {props.dtime}
                                                              plotvalue3y = {props.gasTemp}
                                                              yaxis = 'y2' // To display 3rd Parameter information along the right y axis
                  plotparam4                                  plotvalue4x
                                                              plotvalue4y
                  plotparam5                                  plotvalue5x
                                                              plotvalue5y
                  />
                </CardContent>
              <CardActions>Graph Captions</CardActions>
          </Card>
        </Col>

        {/* OIL & WATER LEVEL */}
        <Col xs={12} sm={12} md={5} lg={5}>
            <Card className="mainCard">
              <CardContent>
              <PlotCore
                  yaxis1 = 'Oil Level (in) / Water Level (in)' yaxis1range = {[0,100]}
                  yaxis2 = ''                                  // Doesn't need 2nd one
                  plotparam1 = 'Water Tank Level'             plotvalue1x = {props.dtime}
                                                              plotvalue1y = {props.waterLevel}
                  plotparam2 = 'Oil Tank Level'               plotvalue2x = {props.dtime}
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
          <LiquidGauge  val = {this.props.level_o}
                        name = {'Oil Level'}/>
          <LiquidGauge  val = {this.props.vol_w}
                        name = {'Water Volume'}/>
          <LiquidGauge  val = {this.props.vol_o}
                        name = {'Water Level'}/>
        </Col> */}
      </Row>
    </Grid>
  );
}

export default MainGraph;
