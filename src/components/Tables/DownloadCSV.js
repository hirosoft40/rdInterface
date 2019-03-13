// ==== REACT COMPONENT to download CSV file ====
// Libracy used: 
//      Material-ui, 
//      React-csv(https://github.com/react-csv/react-csv)
//      moment.js (https://momentjs.com/)
// Data IN: From EnchancedTable.js:and finalData from  (Array of Array)
// Data OUT: CSV file(file name: flowback_YYYYMMDD_HH:MM:SS AM/PM)
// 
//==============

import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { CloudDownload } from "@material-ui/icons";
import { CSVLink } from "react-csv";
import moment from "moment";

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
      <CSVLink data={finalData} filename={`flowback_${fileTimeStamp}.csv`}>
        <IconButton disabled={!data || data.length < 1 ? true : false}>
          <CloudDownload />
        </IconButton>
      </CSVLink>
    </div>
  );
};
