import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Tooltip from "@material-ui/core/Tooltip";
import { lighten } from "@material-ui/core/styles/colorManipulator";
import MainBar from '../MainBar/MainBar'
import { DownloadCSV } from "./DownloadCSV";
import moment from "moment";
import { url, urlArg2, reqTableData } from '../../E-nvConfig'
import CircularProgress from '@material-ui/core/CircularProgress';


let counter = 0;

function createData(
  time,
  Choke,
  P_WH,
  P_Ann,
  Qg_mcfh,
  Qg_mcfd,
  Qo_bph,
  Qo_bpd,
  Qw_bph,
  Qw_bpd,
  Chlorides,
  Shrinkage,
  Plate_Size,
  Gas_Gravity,
  P_Sep,
  P_Diff,
  T_g,
  P_DS
) {
  counter += 1;
  return {
    id: counter,
    time,
    Choke,
    P_WH,
    P_Ann,
    Qg_mcfh,
    Qg_mcfd,
    Qo_bph,
    Qo_bpd,
    Qw_bph,
    Qw_bpd,
    Chlorides,
    Shrinkage,
    Plate_Size,
    Gas_Gravity,
    P_Sep,
    P_Diff,
    T_g,
    P_DS
  };
}

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === "desc"
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
}

const rows = [
  { id: "time", numeric: false, disablePadding: true, label: "Timestamp" },
  { id: "Choke", numeric: true, disablePadding: false, label: "Choke" },
  { id: "P_WH", numeric: true, disablePadding: false, label: "TbgPress" },
  { id: "P_Ann", numeric: true, disablePadding: false, label: "CsgPress" },
  { id: "Qg_mcfh", numeric: true, disablePadding: false, label: "Gasmcfh" },
  { id: "Qg_mcfd", numeric: true, disablePadding: false, label: "Gasmcfd" },
  { id: "Qo_bph", numeric: true, disablePadding: false, label: "boph" },
  { id: "Qo_bpd", numeric: true, disablePadding: false, label: "bopd" },
  { id: "Qw_bph", numeric: true, disablePadding: false, label: "bwph" },
  { id: "Qw_bpd", numeric: true, disablePadding: false, label: "bwpd" },
  { id: "Chlorides", numeric: true, disablePadding: false, label: "Chlorides" },
  { id: "Shrinkage", numeric: true, disablePadding: false, label: "Shrinkage" },
  {
    id: "Plate_Size",
    numeric: true,
    disablePadding: false,
    label: "Plate-Size"
  },
  {
    id: "Gas_Gravity",
    numeric: true,
    disablePadding: false,
    label: "Gas-Gravity"
  },
  { id: "P_Sep", numeric: true, disablePadding: false, label: "Static-Press" },
  { id: "P_Diff", numeric: true, disablePadding: false, label: "Diff-Press" },
  { id: "T_g", numeric: true, disablePadding: false, label: "Temp" },
  { id: "P_DS", numeric: true, disablePadding: false, label: "DS-of-Man-Press" }
];

class EnhancedTableHead extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount } = this.props;

    return (

      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">

          </TableCell>
          {rows.map(
            row => (
              <TableCell
                key={row.id}
                align={row.numeric ? "right" : "left"}
                padding={row.disablePadding ? "none" : "default"}
                sortDirection={orderBy === row.id ? order : false}
              >
                <Tooltip
                  title="Sort"
                  placement={row.numeric ? "bottom-end" : "bottom-start"}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === row.id}
                    direction={order}
                    onClick={this.createSortHandler(row.id)}
                  >
                    {row.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            ),
            this
          )}
        </TableRow>
      </TableHead>
    );
  }
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired
};

const toolbarStyles = theme => ({
  root: {
    paddingRight: theme.spacing.unit
  },
  highlight:
    theme.palette.type === "light"
      ? {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 0.85)
      }
      : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark
      },
  spacer: {
    flex: "1 1 100%"
  },
  actions: {
    color: theme.palette.text.secondary
  },
  title: {
    flex: "0 0 auto"
  },
  progress: {
    margin: theme.spacing.unit * 2,
  }
});

let EnhancedTableToolbar = props => {
  const { numSelected, classes, csvData, status } = props;
  return (
    <Toolbar
      className={classNames(classes.root, {
        [classes.highlight]: numSelected > 0
      })}
    >
      <div className={classes.title}>
        {numSelected > 0 ? (
          <Typography color="inherit" variant="subtitle1">
            {numSelected} selected
          </Typography>
        ) : (
            <Typography variant="h6" id="tableTitle">
              Covenant Flowback Hourly Table
              {!status ?
                <span style={{ color: "red", marginLeft: "20px", fontSize: "20px" }}>
                  Loading Data...
                <CircularProgress className={classes.progress} />
                </span>
                : null}
            </Typography>
          )}
      </div>
      <div className={classes.spacer} />
      <div className={classes.actions}>

        {/* ==== connecting to DownloadCSV ==== */}
        <DownloadCSV csvData={csvData} />
        {/* ==== END ==== */}


      </div>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired
};

EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar);

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3
  },
  table: {
    minWidth: 1020
  },
  tableWrapper: {
    overflowX: "auto"
  }
});

class EnhancedTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: "asc",
      orderBy: "time",
      selected: [],
      header: [],
      data: [],
      finalData: [],
      status: false,
      page: 0,
      rowsPerPage: 5,
      csvData: [] // for csv file
    };
    this.connectToTableApi = this.connectToTableApi.bind(this);
  }

  componentDidMount() {
    this.connectToTableApi();
  }

  //========= API CALL FOR TABLE ==========
  connectToTableApi() {
    var exampleSocket = new WebSocket(url, [
      urlArg2
    ]);

    exampleSocket.addEventListener("open", event => {
      console.log("Hello Server!");
      exampleSocket.send(reqTableData);
    });

    // ***SIMPLE CALL***
    exampleSocket.addEventListener("message", async mEvent => {
      const results = await JSON.parse(mEvent.data);
      if (results.message === "RequestRecords") {
        this.setState({
          data: results.records.data,
          time: results.time,
          finalData: this.state.finalData.concat(results.records.data),
          status: true
        });
      } else {
        //seting header info
        this.setState({
          header: results.head.fields
        });
      }
      this.createCSVData();
      this.actualData(this.state.finalData);
    });
  }
  //===== API CALL END=====

  actualData(tabdata) {
    // var dt=[];
    var dt = tabdata.map(ele => {
      return createData(
        moment(ele.time).format("L_LTS"),
        ele.vals[0],
        ele.vals[1],
        ele.vals[2],
        ele.vals[3],
        ele.vals[4],
        ele.vals[5],
        ele.vals[6],
        ele.vals[7],
        ele.vals[8],
        ele.vals[9],
        ele.vals[10],
        ele.vals[11],
        ele.vals[12],
        ele.vals[13],
        ele.vals[14],
        ele.vals[15],
        ele.vals[16],
        ele.vals[17]
      );
    });
    return dt;
  } // end of function

  // ====== CREATE Array DATA SET FOR CSV ========
  createCSVData() {
    let cdata = [];

    this.state.data.forEach(item => {
      let time = moment(item.time).format("L_LTS");
      cdata.push([time, ...item.vals]);
    });
    this.setState(
      {
        csvData: cdata
      }
    );
  }
  //===============

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = "desc";

    if (this.state.orderBy === property && this.state.order === "desc") {
      order = "asc";
    }

    this.setState({ order, orderBy });
  };

  handleSelectAllClick = event => {
    if (event.target.checked) {
      this.setState(state => ({ selected: state.data.map(n => n.id) }));
      return;
    }
    this.setState({ selected: [] });
  };

  handleClick = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    this.setState({ selected: newSelected });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;




  render() {
    const { classes } = this.props;
    const fdata = this.actualData(this.state.finalData);
    const {
      data,
      order,
      orderBy,
      selected,
      rowsPerPage,
      page,
      csvData
    } = this.state;
    const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);



    return (

      <Paper className={classes.root}>
        {/* === csvData is for csvData, status is to display Loading === */}
        <EnhancedTableToolbar
          numSelected={selected.length}
          csvData={csvData}
          status={this.state.status}
        />
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={this.handleSelectAllClick}
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {stableSort(fdata, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(n => {
                  const isSelected = this.isSelected(n.id);
                  return (
                    <TableRow
                      hover
                      onClick={event => this.handleClick(event, n.id)}
                      role="checkbox"
                      aria-checked={isSelected}
                      tabIndex={-1}
                      key={n.id}
                      selected={isSelected}
                    >
                      <TableCell padding="checkbox">
                      </TableCell>
                      <TableCell component="th" scope="row" padding="none">
                        {n.time}
                      </TableCell>
                      <TableCell align="right">{n.Choke}</TableCell>
                      <TableCell align="right">{n.P_WH}</TableCell>
                      <TableCell align="right">{n.P_Ann}</TableCell>
                      <TableCell align="right">{n.Qg_mcfh}</TableCell>
                      <TableCell align="right">{n.Qg_mcfd}</TableCell>
                      <TableCell align="right">{n.Qo_bph}</TableCell>
                      <TableCell align="right">{n.Qo_bpd}</TableCell>
                      <TableCell align="right">{n.Qw_bph}</TableCell>
                      <TableCell align="right">{n.Qw_bpd}</TableCell>
                      <TableCell align="right">{n.Chlorides}</TableCell>
                      <TableCell align="right">{n.Shrinkage}</TableCell>
                      <TableCell align="right">{n.Plate_Size}</TableCell>
                      <TableCell align="right">{n.Gas_Gravity}</TableCell>
                      <TableCell align="right">{n.P_Sep}</TableCell>
                      <TableCell align="right">{n.P_Diff}</TableCell>
                      <TableCell align="right">{n.T_g}</TableCell>
                      <TableCell align="right">{n.P_DS}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 100, 200]}
          component="div"
          count={fdata.length} // changed fdata length
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            "aria-label": "Previous Page"
          }}
          nextIconButtonProps={{
            "aria-label": "Next Page"
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EnhancedTable);
