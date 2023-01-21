import React from 'react';

const Product = ({ nome, propriedades }) => {
   return (
      <div key={nome}>
         <h2>{nome}</h2>

         <ul>
            {propriedades.map((prop) => (
               <li key={prop}>{prop}</li>
            ))}
         </ul>
      </div>
   );
};

export default Product;
