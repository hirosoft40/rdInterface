import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import "./Graph.css";
import { Grid, Row, Col } from "react-flexbox-grid";
import Gauge from "./Gauge";
import LiquidGauge from "./LiquidGauge";
import PlotCore from './Plot/Plot'

function Graph(props) {
  return (
    <Grid fluid className="grid">
      <Row className="gridRow">
        
        {/* PRESSURE VS CHOKE PLOT */}
        <Col xs={12} sm={12} md={5} lg={5}>
          <Card className="mainCard">
              <CardContent>
                  <PlotCore
                  yaxis1 ='Pressure (PSI)'
                  yaxis2 ='Choke Size (64ths)'
                  plotparam1 = 'Annular Pressure'
                  plotparam2 = 'Wellhead Pressure'
                  plotparam3 = 'DS of Choke Pressure'
                  plotparam4 = 'Separator Pressure'
                  plotparam5 
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
                  yaxis1 = 'Gas mfcd / Oil bpd / Water bpd '
                  yaxis2 = ''
                  plotparam1 = 'Gas Rate'
                  plotparam2 = 'Oil Rate'
                  plotparam3 = 'Water Rate'
                  plotparam4 
                  plotparam5
                  />
              </CardContent>
              <CardActions>Graph Captions</CardActions>
            </Card>
        </Col>
      </Row>
      
      {/* ROW */}
      <Row className="gridRow">
        
        {/* SEPARATOR PRESSURE VS DIFFERENTIAL PRESSURE IN H20 & GAS TEMPERATURE */}
        <Col xs={12} sm={12} md={5} lg={5}>
          <Card className="mainCard">
              <CardContent>
              <PlotCore
                  yaxis1 = 'Seperator Pressure (PSI'
                  yaxis2 = 'Diff Pres in H20 / Gas Temp (F)'
                  plotparam1 = 'Separator Pressure'
                  plotparam2 = 'Differential Pressure'
                  plotparam3 = 'Gas Pressure'
                  plotparam4 = ''
                  plotparam5 = ''
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
                  yaxis1 = 'Oil Level (in) / Water Level (in) '
                  yaxis2 = ''
                  plotparam1 = 'Water Tank Level'
                  plotparam2 = 'Oil Tank Level'
                  plotparam3 = ''
                  plotparam4 = ''
                  plotparam5 = ''
                  />
                </CardContent>
              <CardActions>Graph Captions</CardActions>
            </Card>
        </Col >

        {/* GAUGES LIVE HERE */}
        <Col xs={12} sm={12} md={2} lg={2}>
          {/* <Gauge /> */}
          <LiquidGauge/>
          <LiquidGauge/>
        </Col>
      </Row>
    </Grid>
  );
}

export default Graph;
