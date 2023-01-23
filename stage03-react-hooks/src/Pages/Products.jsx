import React from 'react';

const Products = ({ data }) => {
   return (
      <>
         <h2>{data.nome}</h2>
         <p>Valor: R$ {data.preco}</p>
         <p>Descrição: {data.descricao}</p>
      </>
   );
};

export default Products;
