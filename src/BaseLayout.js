import React from "react";
import AppBarTab from "./components/AppBarTab";

class BaseLayout extends React.Component {
  render() {
    return (
      <div>
        <AppBarTab />
        {this.props.children}
      </div>
    );
  }
}
export default BaseLayout;
