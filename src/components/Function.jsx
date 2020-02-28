import React from 'react'
import { Button } from "@material-ui/core";

const ProfilePageFunc = ({ user }) => {
  
  const showMessage = () => {
    alert('Followed ' + user);
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

export default ProfilePageFunc
