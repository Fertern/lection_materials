import React from "react";

const ProfilePageFunc = ({ user, callback }) => {
  const showMessage = () => {
    alert("Followed " + user);
    callback(false);
  };
  
  const handleClick = () => {
    callback(true);
    setTimeout(showMessage, 5000);
  };
  
  return <div onClick={handleClick}>Follow</div>
};

export default ProfilePageFunc;
