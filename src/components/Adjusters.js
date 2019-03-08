import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import "./Adjusters.css";

class Adjusters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chokeSize: 0,
      oilGravity: 0,
      oilShrinkage: 0,
      waterChlorides: 0,
      plateSize: 0,
      waterKFactorAdj: 0,
      oilKFactorAdj: 0,
      errorMsg: "",
      errorBln: false
    };
  }

  handleChange = name => event => {
    const { value } = event.target;
    // Just in Case, error handling : Material-UI will not accept non integer numbers
    // checking null value, stringCheck and negative value.
    //
    if (value === "" || !parseInt(value) || value < 0) {
      this.setState({
        errorMsg: "Please type in  positive numbers",
        errorBln: true
      });
      return;
    }

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="outer">
        <TextField
          id="chokeSize"
          label="Choke Size"
          value={this.state.chokeSize}
          onChange={this.handleChange("chokeSize")}
          type="number"
          className="eachFigures"
          InputLabelProps={{
            shrink: true
          }}
          margin="normal"
          InputProps={{ inputProps: { min: 0 } }}
          variant="outlined"
          defaultValue={0}
        />
        <TextField
          id="oilGravity"
          label="Oil Gravity"
          value={this.state.oilGravity}
          onChange={this.handleChange("oilGravity")}
          InputProps={{ inputProps: { min: 0 } }}
          type="number"
          InputLabelProps={{
            shrink: true
          }}
          margin="normal"
          variant="outlined"
          defaultValue={0}
        />
        <TextField
          id="oilShrinkage"
          label="Oil Shrinkage"
          value={this.state.oilShrinkage}
          onChange={this.handleChange("oilShrinkage")}
          InputProps={{ inputProps: { min: 0 } }}
          type="number"
          InputLabelProps={{
            shrink: true
          }}
          margin="normal"
          variant="outlined"
          defaultValue={0}
        />
        <TextField
          id="waterChlorides"
          label="Water Chlorides"
          value={this.state.waterChlorides}
          onChange={this.handleChange("waterChlorides")}
          InputProps={{ inputProps: { min: 0 } }}
          type="number"
          InputLabelProps={{
            shrink: true
          }}
          margin="normal"
          variant="outlined"
          defaultValue={0}
        />
        <TextField
          id="plateSize"
          label="Plate Size"
          value={this.state.plateSize}
          onChange={this.handleChange("plateSize")}
          InputProps={{ inputProps: { min: 0 } }}
          type="number"
          InputLabelProps={{
            shrink: true
          }}
          margin="normal"
          variant="outlined"
          defaultValue={0}
        />
        <TextField
          id="waterKFactorAdj"
          label="Water K-Factor Adj"
          value={this.state.waterKFactorAdj}
          onChange={this.handleChange("waterKFactorAdj")}
          InputProps={{ inputProps: { min: 0 } }}
          type="number"
          InputLabelProps={{
            shrink: true
          }}
          margin="normal"
          variant="outlined"
          defaultValue={0}
        />
        <TextField
          id="oilKFactorAdj"
          label="Oil K-Factor Adj"
          value={this.state.oilKFactorAdj}
          onChange={this.handleChange("oilKFactorAdj")}
          InputProps={{ inputProps: { min: 0 } }}
          type="number"
          InputLabelProps={{
            shrink: true
          }}
          margin="normal"
          variant="outlined"
          defaultValue={0}
        />
      </div>
    );
  }
}

export default Adjusters;
