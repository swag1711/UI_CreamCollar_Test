// ComponentB.js
import React, { useContext } from 'react';
//import { AppContext } from './AppContext';
import { king,jack } from '../Initial';
const ComponentB = () => {
//  const { sharedState } = useContext(AppContext);

  return (
    <div>
      <div>Component B:{king} </div>
    </div>
  );
};

export default ComponentB;
