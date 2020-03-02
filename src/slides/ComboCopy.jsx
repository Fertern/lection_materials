import React, { useState, useEffect } from "react";

const ComboLifeCycles = () => {
  const [clicks, setClicks] = useState(0);
  useEffect(() => {
    console.log("Function component updated!");
  });
  useEffect(() => {
    console.log("Function component SUBSCRIBE! (Mounted)");
    return () => {
      console.log("Function component UNSUBSCRIBE! (Unmounted)");
    };
  }, []);
  return (
    <div onClick={() => setClicks(clicks + 1)}>
      Clicks: {clicks}
    </div>
  )
};

export default ComboLifeCycles;

