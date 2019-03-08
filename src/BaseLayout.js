import React from "react";

class BaseLayout extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
export default BaseLayout;
