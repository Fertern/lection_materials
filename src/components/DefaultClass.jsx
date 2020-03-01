import React, { Component } from "react";
import { Button } from "@material-ui/core";

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
    return (
      <Button variant="contained" onClick={this.handleClick}>
        Follow
      </Button>
    );
  }
}

export default ProfilePageClass;
