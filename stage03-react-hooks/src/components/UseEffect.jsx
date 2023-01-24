import React from 'react';

const UseEffect = ({ data, setData, count, setCount }) => {
   function handleCount() {
      setCount(count + 1);
   }

   React.useEffect(() => {
      fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
         .then((res) => res.json())
         .then((json) => setData(json));
   }, []);

   return (
      <>
         {data && (
            <div>
               <h1>{data.nome}</h1>
               <p>R$ {data.preco}</p>
               <p>Total: R$ {data.preco * count}</p>

               <button onClick={handleCount}>{count}</button>
            </div>
         )}
      </>
   );
};

export default UseEffect;
