// ==== REACT COMPONENT TO NAV BAR ====
// Library used: material-ui (https://material-ui.com/), react-router-dom)
// Data IN: props value of chokeSize, oilGravity, oilShrinkage, waterChlorides
// NOTE: DISPLAY ONLY
//==============

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InsertChart from '@material-ui/icons/InsertChart';
import IconButton from '@material-ui/core/IconButton';
import TableChart from '@material-ui/icons/TableChart';
import Tooltip from '@material-ui/core/Tooltip';
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
                    
                    <Tooltip title='Chart'>
                        <Link to ='/'>
                            <IconButton>
                                <InsertChart style={{color: '#f4cd00', fontSize: 28}} />
                            </IconButton>
                        </Link>
                    </Tooltip>
                    
                    <Tooltip title="Table">
                        <Link to ='/table'>
                            <IconButton>
                                <TableChart style={{color: '#f4cd00', fontSize: 28}}/>
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
                </Toolbar>
            </AppBar>
        </div>
    );
    }

MainBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainBar);
