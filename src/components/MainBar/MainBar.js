import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
<<<<<<< HEAD
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import TableChart from '@material-ui/icons/TableChart';
=======
import InsertChart from '@material-ui/icons/InsertChart';
import IconButton from '@material-ui/core/IconButton';
import TableChart from '@material-ui/icons/TableChart';
import Tooltip from '@material-ui/core/Tooltip';

>>>>>>> f027c905fd5871590db73c54e8b3fce3ce0fda2b
import Assumptions from '../Modal/Assumptions';
import { Link } from 'react-router-dom'

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

                    {/* OIL WELL NAME IS RECEIVED FROM APP.JS AND OUTPUT THROUGH HERE */}
                    <Typography variant="h6" style={{color: '#f4cd00', fontSize: 18, fontWeight: 'normal'}} className={classes.grow} >
                        {props.oilWellName}
                    </Typography>
                    
<<<<<<< HEAD
                    {/* THIS IS WHERE VALUES ARE TO BE INPUT. LOCATED IN src/components/modals/Assumptions */}
                    <Assumptions 
                        chokeSize = {props.chokeSize}
                        oilGravity = {props.oilGravity}
                        oilShrinkage = {props.oilShrinkage}
                        waterChlorides = {props.waterChlorides}
                    />

                    <Link to ='/table'>
                        <IconButton style={{color: '#f4cd00', fontSize: 28}}>
                            <TableChart />
                        </IconButton>
                    </Link>

                    <Link to ='/table'>
                        <IconButton style={{color: '#f4cd00', fontSize: 28}}>
                            <AccountCircle />
                        </IconButton>
                    </Link>
=======
                    <Tooltip title='Chart'>
                        <Link to ='/'>
                            <IconButton style={{color: '#f4cd00', fontSize: 28}}>
                                <InsertChart />
                            </IconButton>
                        </Link>
                    </Tooltip>
                    
                    <Tooltip title="Table">
                        <Link to ='/table'>
                            <IconButton style={{color: '#f4cd00', fontSize: 28}}>
                                <TableChart />
                            </IconButton>
                        </Link>
                    </Tooltip>


                    {/* THIS IS WHERE VALUES ARE TO BE INPUT. LOCATED IN src/components/modals/Assumptions */}
                        <Assumptions 
                            chokeSize = {props.chokeSize}
                            oilGravity = {props.oilGravity}
                            oilShrinkage = {props.oilShrinkage}
                            waterChlorides = {props.waterChlorides}
                        />
>>>>>>> f027c905fd5871590db73c54e8b3fce3ce0fda2b
                
                </Toolbar>
            </AppBar>
        </div>
    );
    }

MainBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainBar);
