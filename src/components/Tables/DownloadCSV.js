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

export const DownloadCSV = props => {
  console.log("props", props);
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
  const error = props ? "" : <h1>Loading....</h1>;
  let data = [];
  const d = props.csvData.map(item => {
    let time = moment(item.time).format("L_LTS");
    let newArr = [time, ...item.vals];
    data.push(newArr);
  });
  const fileTimeStamp = moment().format("L_LTS");

  const finalData = [...header, ...data];

  return (
    <div>
      <h1>{error}</h1>
      <CSVLink data={finalData} filename={`flowback_${fileTimeStamp}.csv`}>
        <IconButton>
          <CloudDownload />
        </IconButton>
      </CSVLink>
    </div>
  );
};
