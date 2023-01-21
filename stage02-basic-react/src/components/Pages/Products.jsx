import React from 'react';
import Product from '../Product/Product';

const Products = () => {
   const produtos = [
      { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
      { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
   ];

   return (
      <>
         <main>
            <h1>Produtos</h1>

            {produtos.map((produto) => (
               <Product key={produto.nome} {...produto} />
            ))}
         </main>
      </>
   );
};

export default Products;
