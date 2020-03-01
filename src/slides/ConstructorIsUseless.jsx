import React, { Component } from "react";

class ConstructorIsUseless extends Component {
  /* Если у вас настроен Babel, конструктор писать не обязательно */
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     clicks: 0
  //   };
  // }
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

export default ConstructorIsUseless;
