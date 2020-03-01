import React, { useEffect } from 'react';

const ComponentDidUpdateExample = () => {
  useEffect(() => { console.log('Rerendered!') });
  
  return <div>ComponentDidUpdate in useEffect()</div>;
}

export default ComponentDidUpdateExample;

