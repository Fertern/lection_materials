import React, { Component } from "react";

class ProfilePageClass extends Component {
  showMessage = () => {
    const { user, callback } = this.props;
    alert("Followed " + user);
    callback(false);
  };
  
  handleClick = () => {
    const { callback } = this.props;
    callback(true);
    setTimeout(this.showMessage, 5000);
  };
  
  render() {
    return <div onClick={this.handleClick}>Follow</div>
  }
}

export default ProfilePageClass;
