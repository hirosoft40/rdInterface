import React from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Paper } from "@material-ui/core";
import "./AppBarTab.css";

class AppBarTab extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  
  render() {
    return (
      <Paper className="appbar">
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          // indicatorColor="secondary"
          // textColor="primary"
          className="tab"
          centered
        >
          <Tab label="24 Hours" className="eachTab" />
          <Tab label="2 Hours" className="eachTab" />
          <Tab label="10 Minutes" className="eachTab" />
          <Tab label="Hourly" className="eachTab" />
          {/* {this.renderList()} */}
        </Tabs>
      </Paper>
    );
  }
}

AppBarTab.propTypes = {
  classes: PropTypes.object.isRequired
};

export default AppBarTab;
