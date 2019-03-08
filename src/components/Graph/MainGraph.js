import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import "./MainGraph.css";
import { Grid, Row, Col } from "react-flexbox-grid";
import LiquidGauge from "../Gauge/LiquidGauge";
import PlotCore from '../Plot/Plot'
import Adjusters from '../Modal/Adjusters'

function MainGraph(props) {
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
                  plotparam1 = 'Annular Pressure'         plotvalue1x = {['2018-11-15T09:26:20','2018-11-15T09:26:25','2018-11-15T09:26:30','2018-11-15T09:26:35']}
                                                          plotvalue1y = {[2,4,5,6]}
                  plotparam2 = 'Wellhead Pressure'        plotvalue2x = {['2018-11-15T09:26:20','2018-11-15T09:26:25','2018-11-15T09:26:30','2018-11-15T09:26:35']}
                                                          plotvalue2y = {[1,2,5]}
                  plotparam3 = 'DS of Choke Pressure'     plotvalue3x = {['2018-11-15T09:26:20','2018-11-15T09:26:25','2018-11-15T09:26:30','2018-11-15T09:26:35']}
                                                          plotvalue3y = {[2.2,1.3,1.5]}
                                                          yaxis = 'y2' // This is to display choke values along the right y axis
                  plotparam4 = 'Separator Pressure'       plotvalue4x = {['2018-11-15T09:26:20','2018-11-15T09:26:25','2018-11-15T09:26:30','2018-11-15T09:26:35']}
                                                          plotvalue4y = {[2,4,2]}
                  plotparam5                              plotvalue5x
                                                          plotvalue5y
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
                  plotparam1 = 'Gas Rate'                     plotvalue1x = {['2018-11-15T09:26:20','2018-11-15T09:26:25','2018-11-15T09:26:30','2018-11-15T09:26:35']}
                                                              plotvalue1y = {[2000,5000,7000,9000]}
                  plotparam2 = 'Oil Rate'                     plotvalue2x = {['2018-11-15T09:26:20','2018-11-15T09:26:25','2018-11-15T09:26:30','2018-11-15T09:26:35']}
                                                              plotvalue2y = {[3000,8000,3000,1000]}
                  plotparam3 = 'Water Rate'                   plotvalue3x = {['2018-11-15T09:26:20','2018-11-15T09:26:25','2018-11-15T09:26:30','2018-11-15T09:26:35']}
                                                              plotvalue3y = {[2000,5000,3000,9500]}
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
          <Adjusters/>
        </Col>
      </Row>
      
      {/* SECOND ROW */}
      <Row className="gridRow">
        
        {/* SEPARATOR PRESSURE VS DIFFERENTIAL PRESSURE IN H20 & GAS TEMPERATURE */}
        <Col xs={12} sm={12} md={5} lg={5}>
          <Card className="mainCard">
              <CardContent>
              <PlotCore
                  yaxis1 = 'Seperator Pressure (PSI'          yaxis1range = {[0,2000]}
                  yaxis2 = 'Diff Pres in H20 / Gas Temp (F)'  yaxis2range = {[0,400]}
                  plotparam1 = 'Separator Pressure'           plotvalue1x = {[1,2,3,4]}
                                                              plotvalue1y = {[2,5,6,7]}
                  plotparam2 = 'Differential Pressure'        plotvalue2x = {[1,2,3]}
                                                              plotvalue2y = {[3,5,6]}
                  plotparam3 = 'Gas Temperature'              plotvalue3x = {[1,2,3]}
                                                              plotvalue3y = {[6,3,1]}
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
                  plotparam1 = 'Water Tank Level'             plotvalue1x = {[1,2,3]}
                                                              plotvalue1y = {[3,7,6]}
                  plotparam2 = 'Oil Tank Level'               plotvalue2x = {[1,2,3]}
                                                              plotvalue2y = {[2,4,5]}
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
        <Col xs={12} sm={12} md={2} lg={2}>
          <LiquidGauge/>
          <LiquidGauge/>
        </Col>
      </Row>
    </Grid>
  );
}

export default MainGraph;
