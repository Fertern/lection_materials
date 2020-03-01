import React, { useState, useEffect } from "react";

const ComboLifeCycles = () => {
  const [clicks, setClicks] = useState(0);
  const [checkVariable, setCheckVariable] = useState(1);
  useEffect(() => {
    console.log("Function component SUBSCRIBE! (Mounted)");
    return () => {
      console.log("Function component UNSUBSCRIBE! (Unmounted)");
    };
  }, [checkVariable]);
  useEffect(() => {
    console.log("Function component updated!");
  }, [clicks]);
  return (
    <div>
      <div onClick={() => setClicks(clicks + 1)}>Clicks: {clicks}</div>
      <div onClick={() => setCheckVariable(checkVariable + 1)}>
        Check variable: {checkVariable}
      </div>
    </div>
  );
};

export default ComboLifeCycles;
