import React, { Component } from "react";

class Example extends Component {
  componentDidMount() {
    console.log("MOUNTED AND LOADED!");
  }
  render() {
    return <div>Lifecycle "componentDidMount"</div>;
  }
}

export default Example;
