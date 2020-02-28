import React, { Component } from 'react';
import { Button } from '@material-ui/core';

class ProfilePageClass extends Component {
  showMessage = () => {
    alert('Followed ' + this.props.user);
  };

  handleClick = () => {
    setTimeout(this.showMessage, 5000);
  };

  render() {
    return <Button variant="contained" onClick={this.handleClick}>Follow</Button>;
  }
}

export default ProfilePageClass;




