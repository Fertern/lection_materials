import React from "react";
import { Button } from "@material-ui/core";

const ProfilePageFunc = ({ user, callback }) => {
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
};

export default ProfilePageFunc;
