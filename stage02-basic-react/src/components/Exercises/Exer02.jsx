import React from 'react';

// Exercise 02 - JSX Arrays
const Exer02 = () => {
   const produtos = [
      {
         id: 1,
         nome: 'Smartphone',
         preco: 'R$ 2000',
         cores: ['#29d8d5', '#252a34', '#fc3766'],
      },
      {
         id: 2,
         nome: 'Notebook',
         preco: 'R$ 3000',
         cores: ['#ffd045', '#d4394b', '#f37c59'],
      },
      {
         id: 3,
         nome: 'Tablet',
         preco: 'R$ 1500',
         cores: ['#365069', '#47c1c8', '#f95786'],
      },
   ];

   const data = produtos.filter(
      ({ preco }) => Number(preco.replace('R$ ', '')) > 1500,
   );

   return (
      <>
         <section>
            {data.map(({ id, nome, preco, cores }) => (
               <div key={id}>
                  <h2>{nome}</h2>
                  <p>Preço: {preco}</p>

                  <ul
                     style={{
                        listStyle: 'none',
                        textAlign: 'left',
                        padding: 0,
                     }}
                  >
                     {cores.map((cor) => (
                        <li style={{ backgroundColor: cor }} key={cor}>
                           {cor}
                        </li>
                     ))}
                  </ul>
               </div>
            ))}
         </section>
      </>
   );
};

export default Exer02;
