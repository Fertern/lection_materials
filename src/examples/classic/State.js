import React, { Component } from "react";

class ComponentWithState extends Component {
  state = {
    clicks: 0
  };
  handleClick = () => {
    const { clicks } = this.state;
    this.setState({ clicks: clicks + 1 });
  };
  render() {
    const { clicks } = this.state;

    return <div onClick={this.handleClick}>Clicks: {clicks}</div>;
  }
}

export default ComponentWithState;
