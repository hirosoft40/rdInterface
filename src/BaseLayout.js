import React from "react";
import AppBar from "./components/AppBar";

class BaseLayout extends React.Component {
  render() {
    return (
      <div>
        <AppBar />
        {this.props.children}
      </div>
    );
  }
}
export default BaseLayout;
