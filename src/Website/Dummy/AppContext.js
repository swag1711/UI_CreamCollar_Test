// AppContext.js
import React, { createContext, useState } from 'react';

export const AppContext = createContext();
let king='king on fire';
let jack='jack on the roll';

export default  {king,jack};
export const AppProvider = ({ children }) => {
  const [sharedState, setSharedState] = useState('initial value');

  const updateSharedState = (newValue) => {
    setSharedState(newValue);
  };

  return (
    <AppContext.Provider value={{ sharedState, updateSharedState }}>
      {children}
    </AppContext.Provider>
  );
};
