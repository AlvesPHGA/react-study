import React from 'react';

// Exercise 01 - JSX

const Exer01 = () => {
   const luana = {
      client: 'Luana',
      age: 27,
      buys: [
         { name: 'Notebook', price: 'R$ 2500' },
         { name: 'Geladeira', price: 'R$ 3000' },
         { name: 'Smartphone', price: 'R$ 1500' },
      ],
      active: true,
   };

   const mario = {
      client: 'Mario',
      age: 31,
      buys: [
         { name: 'Notebook', price: 'R$ 2500' },
         { name: 'Geladeira', price: 'R$ 3000' },
         { name: 'Smartphone', price: 'R$ 1500' },
         { name: 'Guitarra', price: 'R$ 3500' },
      ],
      active: false,
   };

   const data = luana;

   const speding = data.buys
      .map((item) => Number(item.price.replace('R$ ', '')))
      .reduce((acc, index) => acc + index);

   return (
      <>
         <h1>Cliente: {data.client}</h1>
         <p>Idade: {data.age} anos</p>
         <p>
            Situação:{' '}
            <span style={data.active ? { color: 'green' } : { color: 'red' }}>
               {data.active ? 'Ativo' : 'Inativo'}
            </span>
         </p>
         <p>Total gasto: R$ {speding}</p>
         <p>{speding > 10000 ? 'Gasto acima da media' : ''}</p>
      </>
   );
};

export default Exer01;
