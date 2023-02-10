import React from 'react';
import { NavLink, Route, Routes, useParams } from 'react-router-dom';
import DescriptionProduct from './DescriptionProduct';
import ModelsProduct from './ModelsProduct';

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

         <nav>
            <NavLink to="" end>
               Descrição
            </NavLink>
            <NavLink to="modelsproduct">Modelos</NavLink>
         </nav>

         <Routes>
            <Route path="" element={<DescriptionProduct />} />
            <Route path="modelsproduct" element={<ModelsProduct />} />
         </Routes>
      </div>
   );
};

export default Products;
