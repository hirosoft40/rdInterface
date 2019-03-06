import React from "react";
import Button from "@material-ui/core/Button";
import "./TopButtons.css";

const tick = ["24 Hours", "2 Hours", "10 Minutes", "Hourly"];

function TopButtons() {
  const lenderButtons = tick.map((item, idx) => {
    return (
      <Button
        key={idx}
        variant="contained"
        size="medium"
        color="secondary"
        className="buttons"
      >
        {item}
      </Button>
    );
  });

  return (
    <div className="topButtonDiv">
      {lenderButtons}
      {/* <Button
        variant="contained"
        size="medium"
        color="secondary"
        className="buttons"
        style={{ color: "white" }}
      >
        2 Hours
      </Button>
      <Button variant="outlined" size="medium" className="buttons3">
        10 Minutes
      </Button>
      <Button
        variant="contained"
        size="medium"
        color="secondary"
        className="buttons"
      >
        Hourly
      </Button>
      <Button
        variant="contained"
        size="medium"
        color="primary"
        className="buttons"
        style={{ color: "white" }}
      >
        2 Hours
      </Button>
      <Button variant="outlined" size="medium" className="buttons3">
        10 Minutes
      </Button>
      <Button
        variant="contained"
        size="medium"
        color="primary"
        className="buttons"
      >
        Hourly
      </Button>
      Other option:https://material-ui.com/demos/buttons/ */}
    </div>
  );
}

export default TopButtons;
