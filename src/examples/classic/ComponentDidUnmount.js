import React, { Component } from "react";

class Example extends Component {
  componentWillUnmount() {
    console.log("Component is dead.");
  }
  render() {
    return <div>Lifecycle "componentWillUnmount"</div>;
  }
}

export default Example;
