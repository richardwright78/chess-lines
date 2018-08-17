import React, { Component } from "react";

class Square extends Component {
  render() {
    return <div id={this.props.name} className="square" />;
  }
}

export default Square;
