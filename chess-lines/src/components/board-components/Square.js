import React, { Component } from "react";

class Square extends Component {
  render() {
    return (
      <div id={this.props.name} className="square">
        <i class="fas fa-chess-rook" />
      </div>
    );
  }
}

export default Square;
