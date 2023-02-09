import React from 'react';
import { useParams } from 'react-router-dom';

const Products = () => {
   const params = useParams();
   return (
      <div>
         <h1>Products</h1>
         <p
            style={{
               textTransform: 'capitalize',
            }}
         >
            {params.id}
         </p>
      </div>
   );
};

export default Products;
