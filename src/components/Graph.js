import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import "./Graph.css";
import { Grid, Row, Col } from "react-flexbox-grid";
import Gauge from "./Gauge";

function Graph(props) {
  return (
    <Grid fluid className="grid">
      <Row className="gridRow">
        <Col xs={12} sm={12} md={6} lg={5}>
          <Card className="mainCard">
              <CardContent>Graph Comes here</CardContent>
              <CardActions>Graph Captions</CardActions>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={6} lg={5}>
           <Card className="mainCard">
              <CardContent>Graph Comes here</CardContent>
              <CardActions>Graph Captions</CardActions>
            </Card>
        </Col>
      </Row>
      <Row className="gridRow">
        <Col xs={12} sm={12} md={6} lg={5}>
          <Card className="mainCard">
              <CardContent>Graph Comes here</CardContent>
              <CardActions>Graph Captions</CardActions>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={6} lg={5}>
           <Card className="mainCard">
              <CardContent>Graph Comes here</CardContent>
              <CardActions>Graph Captions</CardActions>
            </Card>
        </Col>
      </Row>
    </Grid>
  );
}

export default Graph;
