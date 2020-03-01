import React, { Component } from "react";

class ComboLifeCyclesClass extends Component {
  state = {
    clicks: 0
  };
  componentDidMount() {
    console.log("Class SUBSCRIBE (Mounted)");
  }
  componentDidUpdate() {
    console.log("Class fix subscribe! (Updated)");
  }
  componentWillUnmount() {
    console.log("Class UNSUBSCRIBE! (Unmounted)");
  }
  render() {
    const { clicks } = this.state;

    return (
      <div onClick={() => this.setState({ clicks: clicks + 1 })}>
        Clicks: {clicks}
      </div>
    );
  }
}

export default ComboLifeCyclesClass;
