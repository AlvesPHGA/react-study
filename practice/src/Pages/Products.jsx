import React from 'react';

const Products = ({ dataApi, setDataApi }) => {
   React.useEffect(() => {
      fetch('https://api.punkapi.com/v2/beers')
         .then((res) => res.json())
         .then((datas) => setDataApi(datas));
   }, []);

   function handleModal({ target }) {
      console.log(target.dataset.product);
   }

   const SECTION = {
      display: 'flex',
      flexFlow: 'nowrap row',
      flexWrap: 'wrap',
      justifyContent: 'center',
   };

   const CARD = {
      width: 'fit-content',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      border: '1px solid red',
      padding: '.5rem',
      justifyContent: 'center',
      position: 'relative',
   };

   const CARD__IMG = {
      width: '100%',
      height: '12rem',
   };

   const IMG = {
      maxWidth: '100%',
      maxHeight: '100%',
   };

   const TITLE = {
      wordBreak: 'break-word',
      width: '236px',
   };

   const LAYER = {
      position: 'absolute',
      top: 0,
      left: 0,
      background: 'gray',
      width: '100%',
      height: '100%',
      opacity: 0,
   };

   if (!dataApi) return null;

   return (
      <>
         <section style={SECTION}>
            {dataApi.map(({ id, name, image_url }) => (
               <div onClick={handleModal} style={CARD} key={id}>
                  <div style={CARD__IMG}>
                     <img style={IMG} src={image_url} alt="" />
                  </div>
                  <h2 style={TITLE}>{name}</h2>
                  <div data-product={name} style={LAYER}></div>
               </div>
            ))}
         </section>
      </>
   );
};

export default Products;
