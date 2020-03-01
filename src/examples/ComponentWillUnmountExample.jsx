import React, { useEffect } from "react";

const ComponentWillUnmountExample = () => {
  useEffect(() => {
    return () => {
      console.log("Component is dead((9");
    };
  }, []);

  return <div>ComponentWillUnmount with useEffect</div>;
};

export default ComponentWillUnmountExample;
