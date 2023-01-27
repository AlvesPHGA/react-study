import React from 'react';
import { GlobalContext } from '../Exercises/GlobalContext';

const ExGlobalContext = () => {
   const { product } = React.useContext(GlobalContext);

   if (product === null) return null;
   return (
      <>
         <section>
            {product.map(({ id, nome }) => (
               <div key={id}>
                  <h2>{nome}</h2>
               </div>
            ))}
         </section>
      </>
   );
};

export default ExGlobalContext;
