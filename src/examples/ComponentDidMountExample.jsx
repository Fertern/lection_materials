import React, { useEffect } from 'react';

const ComponentDidMountExample = () => {
  useEffect(() => { console.log('MOUNTED AND LOADED') }, []);
  
  return <div>ComponentDidMount in useEffect()</div>
}

export default ComponentDidMountExample;

