import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import "./Graph.css";
import { Grid, Row, Col } from "react-flexbox-grid";
import Gouge from "./Gouge";

function Graph(props) {
  return (
    <Row>
      <Col>
        <Row>
          <Card className="mainCard">
            <CardContent>Graph Comes here</CardContent>
            <CardActions>Graph Captions</CardActions>
          </Card>
          <Card className="mainCard">
            <CardContent>Graph Comes here</CardContent>
            <CardActions>Graph Captions</CardActions>
          </Card>
        </Row>
        <Row>
          <Card className="mainCard">
            <CardContent>Graph Comes here</CardContent>
            <CardActions>Graph Captions</CardActions>
          </Card>
          <Card className="mainCard">
            <CardContent>Graph Comes here</CardContent>
            <CardActions>Graph Captions</CardActions>
          </Card>
        </Row>
      </Col>
      <Col>
        <Card className="colCard">
          <Gouge />
          {/* <CardContent>Graph Comes here</CardContent>
          <CardActions>Graph Captions</CardActions> */}
        </Card>
      </Col>
    </Row>
  );
}

export default Graph;
