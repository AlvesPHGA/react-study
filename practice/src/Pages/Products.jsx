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

   if (!dataApi) return null;

   return (
      <>
         <section
            style={{
               display: 'flex',
               flexFlow: 'nowrap row',
               flexWrap: 'wrap',
               justifyContent: 'center',
            }}
         >
            {dataApi.map(({ id, name, image_url }) => (
               <div
                  onClick={handleModal}
                  style={{
                     width: 'fit-content',
                     display: 'flex',
                     flexDirection: 'column',
                     alignItems: 'center',
                     border: '1px solid red',
                     padding: '.5rem',
                     justifyContent: 'center',
                     position: 'relative',
                  }}
                  key={id}
               >
                  <div
                     style={{
                        width: '100%',
                        height: '12rem',
                     }}
                  >
                     <img
                        style={{
                           maxWidth: '100%',
                           maxHeight: '100%',
                        }}
                        src={image_url}
                        alt=""
                     />
                  </div>
                  <h2
                     style={{
                        wordBreak: 'break-word',
                        width: '236px',
                     }}
                  >
                     {name}
                  </h2>
                  <div
                     data-product={name}
                     style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        background: 'gray',
                        width: '100%',
                        height: '100%',
                        opacity: 0,
                     }}
                  ></div>
               </div>
            ))}
         </section>
      </>
   );
};

export default Products;
