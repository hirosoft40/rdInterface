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
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterListIcon from "@material-ui/icons/FilterList";
import { lighten } from "@material-ui/core/styles/colorManipulator";
import { DownloadCSV } from "./DownloadCSV";
import {moment} from 'moment';

let counter = 0;
function createData(name, calories, fat, carbs, protein) {
  counter += 1;
  return { id: counter, name, calories, fat, carbs, protein };
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
  {id: "Shrinkage", numeric: true, disablePadding: false, label: "Protein (g)"},
  { id: "Plate-Size",numeric: true, disablePadding: false, label: "Plate-Size"},
  {id: "Gas-Gravity", numeric: true, disablePadding: false, label: "Gas-Gravity"},
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
    const {
      onSelectAllClick,
      order,
      orderBy,
      numSelected,
      rowCount
    } = this.props;

    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={numSelected === rowCount}
              onChange={onSelectAllClick}
            />
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
  }
});

let EnhancedTableToolbar = props => {
  const { numSelected, classes, tableData } = props;
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
          </Typography>
        )}
      </div>
      <div className={classes.spacer} />
      <div className={classes.actions}>
        <DownloadCSV tableData={tableData} />
        {/* {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton aria-label="Delete">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton aria-label="Filter list">
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )} */}
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
      page: 0,
      rowsPerPage: 5,
      tableData: [] // for csv file
    };
    this.connectToTableApi = this.connectToTableApi.bind(this);
  }
  // state = {
  //   order: "asc",
  //   orderBy: "calories",
  //   selected: [],
  //   header: [],
  //   finaldata: [],
  //   page: 0,
  //   rowsPerPage: 5,
  // data: [
  //   createData("11/14/2018 1:00:00 PM", 305, 3.7, 67, 4.3),
  //   createData("11/14/2018 1:00:00 PM", 452, 25.0, 51, 4.9),
  //   createData("11/14/2018 1:00:00 PM", 262, 16.0, 24, 6.0),
  //   createData("11/14/2018 1:00:00 PM", 159, 6.0, 24, 4.0),
  //   createData("11/14/2018 1:00:00 PM", 356, 16.0, 49, 3.9),
  //   createData("11/15/2018 1:00:00 PM", 408, 3.2, 87, 6.5),
  //   createData("11/15/2018 1:00:00 PM", 237, 9.0, 37, 4.3),
  //   createData("11/15/2018 1:00:00 PM", 375, 0.0, 94, 0.0),
  //   createData("11/15/2018 1:00:00 PM", 518, 26.0, 100, 7.0),
  //   createData("11/15/2018 1:00:00 PM", 392, 0.2, 98, 0.0),
  //   createData("11/27/2018 1:00:00 PM", 318, 0, 81, 2.0),
  //   createData("11/27/2018 1:00:00 PM", 360, 19.0, 9, 37.0),
  //   createData("11/27/2018 1:00:00 PM", 437, 18.0, 63, 4.0)
  // ]

  //};

  componentDidMount() {
    this.connectToTableApi();
  }

  //========= API CALL FOR TABLE ==========
  connectToTableApi() {
    var exampleSocket = new WebSocket("ws://rdsfastrack.com/backend/", [
      "com.campbellsci.webdata"
    ]);

    exampleSocket.addEventListener("open", event => {
      console.log("Hello Server!");
      exampleSocket.send(
        '{"message":"AddRequests","requests":[{"uri":"LNDB:8782_Hour_Table","mode":"since-record","p1":"1","transaction":1,"order":"collected"}]}'
      );
    });

    // ***SIMPLE CALL***

    exampleSocket.addEventListener("message", async mEvent => {
      // const results= await JSON.parse(mEvent.data).records.data
      const results = await JSON.parse(mEvent.data);
      if (results.message === "RequestRecords") {
        this.setState({
          data: results.records.data,
          time: results.time
        });
        // console.log("finaldata:", this.state.data);
      } else {
        //seting header info
        this.setState({
          header: results.head.fields
        });
      }
      this.createTableData();
    });
  }
  //===== API CALL END=====

  // ====== CREATE Array DATA SET FOR TABLE AND CSV ========
  createTableData() {
    const finalData = this.state.data.map(item => {
      const time = item.time;
      console.log(time)
      // let time = moment(item.time).format("L_LTS");
      this.setState({
        tableData: [time, ...item.vals]

      });
    });
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
    // console.log(this.props.finaldata);
    const { classes } = this.props;
    const { data, order, orderBy, selected, rowsPerPage, page, tableData } = this.state;
    const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <Paper className={classes.root}>
        <EnhancedTableToolbar numSelected={selected.length} tableData={tableData} />
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
              {stableSort(data, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(n => {
                  console.log("n",n)
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
                        <Checkbox checked={isSelected} />
                      </TableCell>
                      <TableCell component="th" scope="row" padding="none">{n.name}</TableCell>
                      <TableCell align="right">{n.calories}</TableCell>
                      <TableCell align="right">{n.fat}</TableCell>
                      <TableCell align="right">{n.carbs}</TableCell>
                      <TableCell align="right">{n.protein}</TableCell>
                      <TableCell align="right">{n.protein}</TableCell>
                      <TableCell align="right">{n.protein}</TableCell>
                      <TableCell align="right">{n.protein}</TableCell>
                      <TableCell align="right">{n.protein}</TableCell>
                      <TableCell align="right">{n.protein}</TableCell>
                      <TableCell align="right">{n.protein}</TableCell>
                      <TableCell align="right">{n.protein}</TableCell>
                      <TableCell align="right">{n.protein}</TableCell>
                      <TableCell align="right">{n.protein}</TableCell>
                      <TableCell align="right">{n.protein}</TableCell>
                      <TableCell align="right">{n.protein}</TableCell>
                      <TableCell align="right">{n.protein}</TableCell>
                      <TableCell align="right">{n.protein}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
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
// export default EnhancedTable;
