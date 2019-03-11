import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import "./Adjusters.css"

export default class Assumptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          open: false,
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

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit=() => {
    // insert call to submit data to backend


    this.handleClose()
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
    <div>
        <Button variant="outlined" color="default" onClick={this.handleClickOpen}>
        Assumptions
        </Button>
        <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
          
        >
        <DialogTitle id="form-dialog-title">Assumptions</DialogTitle>
        <DialogContent>
            <DialogContentText>
            Update the assumptions and information below to populate the graphs
            </DialogContentText>
            <TextField
                autoFocus
                margin="dense"
                id="chokeSize"
                label="Choke Size"
                type="number"
                value = {this.state.chokeSize}
                onChange = {this.handleChange("chokeSize")}
                defaultValue={0}
                InputProps={{ inputProps: { min: 0 } }}
                fullWidth
            />
            <TextField
                autoFocus
                margin="dense"
                id="oilGravity"
                label="Oil Gravity"
                type="number"
                value = {this.state.oilGravity}
                onChange={this.handleChange("oilGravity")}
                defaultValue={0}
                InputProps={{ inputProps: { min: 0 } }}
                fullWidth
            />
            <TextField
                autoFocus
                margin="dense"
                id="oilShrinkage"
                label="Oil Shrinkage"
                type="number"
                value = {this.state.oilShrinkage}
                onChange={this.handleChange("oilShrinkage")}
                defaultValue={0}
                InputProps={{ inputProps: { min: 0 } }}
                fullWidth
            />
            <TextField
                autoFocus
                margin="dense"
                id="waterChlorides"
                label="Water Chlorides"
                type="number"
                value = {this.state.waterChlorides}
                onChange={this.handleChange("waterChlorides")}
                defaultValue={0}
                InputProps={{ inputProps: { min: 0 } }}
                fullWidth
            />
            <TextField
                autoFocus
                margin="dense"
                id="plateSize"
                label="Plate Size"
                type="number"
                value = {this.state.plateSize}
                onChange={this.handleChange("plateSize")}
                defaultValue={0}
                InputProps={{ inputProps: { min: 0 } }}
                fullWidth
            />
            <TextField
                autoFocus
                margin="dense"
                id="waterKFactorAdj"
                label="Water K-Factor Adjustment"
                type="number"
                value={this.state.waterKFactorAdj}
                onChange={this.handleChange("waterKFactorAdj")}
                defaultValue={0}
                InputProps={{ inputProps: { min: 0 } }}
                fullWidth
            />
            <TextField
                autoFocus
                margin="dense"
                id="oilKFactorAdj"
                label="Oil K-Factor Adjustment"
                type="number"
                value={this.state.oilKFactorAdj}
                onChange={this.handleChange("oilKFactorAdj")}
                defaultValue={0}
                InputProps={{ inputProps: { min: 0 } }}
                fullWidth
            />
        </DialogContent>
        <DialogActions>
            <Button onClick={this.handleClose} color="primary">
                Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
                Update
            </Button>
        </DialogActions>
        </Dialog>
    </div>
    );
    }
}