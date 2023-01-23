import React from 'react';
import Products from '../Pages/Products';
// import Button from '../components/Button';

const ExeUseState = ({ data, setData, loading }) => {
   async function fetchProduct(legend) {
      const res = await fetch(
         `https://ranekapi.origamid.dev/json/api/produto/${legend}`,
      );
      const infoData = await res.json();
      setData(infoData);
   }

   function handleClick(ev) {
      const legend = ev.target.id;
      fetchProduct(legend);
   }

   return (
      <>
         <section>
            <button onClick={handleClick} id="tablet">
               Tablet
            </button>
            <button onClick={handleClick} id="smartphone">
               Smartphone
            </button>
            <button onClick={handleClick} id="notebook">
               Notebook
            </button>
         </section>
         <section>
            {loading && <span>...Carregando</span>}
            {!loading && data && <Products data={data} />}
         </section>
      </>
   );
};

export default ExeUseState;
