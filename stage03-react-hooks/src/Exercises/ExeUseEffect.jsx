import React from 'react';
import Products from '../Pages/Products';

const ExeUseEffect = ({ data, setData }) => {
   React.useEffect(() => {
      const localItem = window.localStorage.getItem('product');
      if (data !== 'null') setData(localItem);
   }, []);

   React.useEffect(() => {
      if (data !== null) {
         window.localStorage.setItem('product', data);
      }
   }, [data]);

   function handleClick({ target }) {
      const product = target.id;
      setData(product);
   }

   return (
      <>
         <section>
            <button
               onClick={handleClick}
               style={{ marginRight: '.25rem' }}
               id="notebook"
            >
               Notebook
            </button>
            <button
               onClick={handleClick}
               style={{ marginLeft: '.25rem' }}
               id="smartphone"
            >
               Smartphone
            </button>
         </section>

         {data && <Products data={data} />}
      </>
   );
};

export default ExeUseEffect;
