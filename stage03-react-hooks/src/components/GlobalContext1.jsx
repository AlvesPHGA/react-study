import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
   const [count, setCount] = React.useState(0);
   return (
      <GlobalContext.Provider value={{ count, setCount }}>
         {' '}
         {children}{' '}
      </GlobalContext.Provider>
   );
};
