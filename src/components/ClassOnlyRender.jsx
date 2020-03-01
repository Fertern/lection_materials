import React, { Component } from "react";
import { Button } from "@material-ui/core";

class ProfilePageRender extends Component {
  render() {
    const { user, callback } = this.props;

    const showMessage = () => {
      alert("Followed " + user);
      callback(false);
    };

    const handleClick = () => {
      callback(true);
      setTimeout(showMessage, 5000);
    };

    return (
      <Button variant="contained" onClick={handleClick}>
        Follow
      </Button>
    );
  }
}

export default ProfilePageRender;
