// ==== REACT COMPONENT to download CSV file ====
// Libracy used: Material-ui, React-csv
// Data IN: props header and finalData from  (Array of Array)
// Data OUT: timestamp(String), everything else(numbers)
// 3/8 TODO:
//    (1) test with real data esp make header array of array.
//    (2) Timestamp format
//==============

import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { CloudDownload } from "@material-ui/icons";
import { CSVLink } from "react-csv";
import moment from "moment";
import Tooltip from "@material-ui/core/Tooltip";
import { Link } from 'react-router-dom';
import InsertChart from '@material-ui/icons/InsertChart';




export const DownloadCSV = props => {
  const header = [
    [
      "Timestamp",
      "Choke",
      "TbgPress",
      "CsgPress",
      "Gasmcfh",
      "Gasmcfd",
      "boph",
      "bopd",
      "bwph",
      "bwpd",
      "Chlorides",
      "Shrinkage",
      "Plate Size",
      "Gas Gravity",
      "Static Press",
      "Diff Press",
      "Temp",
      "DS of Man Press"
    ]
  ];

  const error = typeof props === "undefined" ? "" : "";

  // creating array to export
  let data = [];

  props.csvData.forEach(item => {
    data.push(item);
  });

  // data to export to csv
  const finalData = [...header, ...data];

  // timestamp for filename
  const fileTimeStamp = moment().format("L_LTS");


  return (
    <div>
      <h1>{error}</h1>
      <Tooltip title='Chart'>
        <Link to ='/'>
            <IconButton>
                <InsertChart style={{color: '#212121', fontSize: 28}} />
            </IconButton>
        </Link>
      </Tooltip>
      <Tooltip title='Download CSV'>             
        <CSVLink data={finalData} filename={`flowback_${fileTimeStamp}.csv`}>
          <IconButton disabled={!data || data.length < 1 ? true : false}>
            <CloudDownload />
          </IconButton>
        </CSVLink>
      </Tooltip>
    </div>
  );
};
