import React, { useState } from "react";

const ComponentWithState = () => {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => setClicks(clicks + 1);

  return <div onClick={handleClick}>Clicks: {clicks}</div>;
};

export default ComponentWithState;
