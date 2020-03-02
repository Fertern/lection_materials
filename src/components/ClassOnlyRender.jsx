import React, { Component } from "react";

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
    
    return <div onClick={handleClick}>Follow</div>;
  }
}

export default ProfilePageRender;
