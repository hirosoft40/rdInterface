import React from 'react';
import Button from '@material-ui/core/Button';
import Settings from '@material-ui/icons/Settings'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import "./Adjusters.css"
// import { format } from 'url';

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

        this.handleSubmit = this.handleSubmit.bind(this);

      }

      
  // Open Modal
  handleClickOpen = () => {
    this.setState({ open: true });
  };


  // Close Modal
  handleClose = () => {
    this.setState({ open: false });
  };


  // Submitting information to the backend
  handleSubmit=(e) => {
    // insert call to submit data to backend
    // POST Method here**
    

    e.PreventDefault();
    this.clearData()
    this.handleClose()
  }


  // Clear form fields upon clicking "update"
  clearData=() =>{

  }

  // Displays text as typing
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
        <Settings style={{color: '#f4cd00'}} onClick={this.handleClickOpen}/>
        
        {/* <Button style={{color: '#f4cd00'}} variant="outlined" onClick={this.handleClickOpen}>
        Assumptions
    </Button> */}

        <form onSubmit = {this.handleSubmit}> 
          <Dialog
              open={this.state.open}
              onClose={this.handleClose}
              aria-labelledby="form-dialog-title"
              maxWidth = {'sm'}
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
                  label={"Current Choke Size: " + this.props.chokeSize[this.props.chokeSize.length -1]}
                  type="number"
                  value = {0}
                  onChange = {this.handleChange("chokeSize")}
                  defaultValue={0}
                  InputProps={{ inputProps: { min: 0 } }}
                  fullWidth
              />
              <TextField
                  autoFocus
                  margin="dense"
                  id="oilGravity"
                  label={"Currrent Oil Gravity: " + this.props.oilGravity[this.props.oilGravity.length -1]}
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
                  label={"Current Oil Shrinkage: " + this.props.oilShrinkage[this.props.oilShrinkage.length -1]}
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
                  label={"Current Water Chlorides: " + this.props.waterChlorides[this.props.waterChlorides.length -1]}
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

        </form>
    </div>
    );
    }
}