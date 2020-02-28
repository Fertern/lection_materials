import React, { Component } from 'react'
import { Button } from "@material-ui/core";

class ProfilePageRender extends Component {
  render() {
    const { user } = this.props;
    
    const showMessage = () => {
      alert("Followed " + user);
    };
    
    const handleClick = () => {
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

