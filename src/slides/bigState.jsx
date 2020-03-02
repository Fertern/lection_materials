import React, { useState } from "react";

const App = () => {
  const [bigState, setBigState] = useState({
    user: 'Tachanka',
    isSecretMode: false,
    isTestMode: false,
    isFetching: false
  });
  
  const setSecretMode = () => {
    setBigState(previousState => ({
      ...previousState,
      isSecretMode: true
    }))
  }
  
  const setTestMode = () => {
    setBigState(previousState => ({
      ...previousState,
      isTestMode: true
    }));
  };
  
return (
  <>
    <div onClick={setSecretMode}>{bigState.isSecretMode}</div>;
    <div onClick={setTestMode}>{bigState.isTestMode}</div>;
  </>
);

};

export default App;
