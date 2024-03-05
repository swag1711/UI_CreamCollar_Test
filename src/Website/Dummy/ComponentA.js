// ComponentA.js
import React, { useContext } from 'react';
import { AppContext } from './AppContext';

const ComponentA = () => {
  const { sharedState, updateSharedState } = useContext(AppContext);

  const handleUpdate = () => {
    updateSharedState('new value from ComponentA');
  };

  return (
    <div>
      <div>Component A: {sharedState}</div>
      <button onClick={handleUpdate}>Update Shared State</button>
    </div>
  );
};

export default ComponentA;
