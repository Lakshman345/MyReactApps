import React from "react";

class Xyz extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <h2>{this.props.children}</h2>
      </div>
    );
  }
}
export default Xyz;
