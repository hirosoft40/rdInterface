import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TableChart from '@material-ui/icons/TableChart'
import Assumptions from '../Modal/Assumptions'

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    };

function MainBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
        <AppBar position="static" style={{ background: '#424242' }}>
            <Toolbar>
            {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
            </IconButton> */}
            <Typography variant="h6" style={{color: '#f4cd00', fontSize: 18}} className={classes.grow} >
                {props.oilWellName}
            </Typography>
            <Assumptions 
                chokeSize = {props.chokeSize}
                oilGravity = {props.oilGravity}
                oilShrinkage = {props.oilShrinkage}
                waterChlorides = {props.waterChlorides}
            />
            <IconButton color="inherit">
                <TableChart/>
            </IconButton>
            <IconButton color="inherit">
                <AccountCircle />
            </IconButton>
            
        </Toolbar>
        </AppBar>
        </div>
    );
    }

MainBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainBar);
