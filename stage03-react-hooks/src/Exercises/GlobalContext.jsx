import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalProduct = ({ children }) => {
   const [product, setProduct] = React.useState(null);

   React.useEffect(() => {
      fetch('https://ranekapi.origamid.dev/json/api/produto/')
         .then((res) => res.json())
         .then((res) => setProduct(res));
   }, []);

   function handleClean() {
      setProduct(null);
   }

   return (
      <GlobalContext.Provider value={{ product, setProduct, handleClean }}>
         {children}
      </GlobalContext.Provider>
   );
};
