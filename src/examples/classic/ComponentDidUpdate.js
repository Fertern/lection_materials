import React, { Component } from "react";

class Example extends Component {
  componentDidUpdate() {
    console.log("Rerendered!");
  }
  render() {
    return <div>Lifecycle "componentDidUpdate"</div>;
  }
}

export default Example;
