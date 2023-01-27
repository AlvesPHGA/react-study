import React from 'react';

const Modal = ({ dataApi, modal, setModal, elementApi }) => {
   const filterElements = dataApi.filter(({ name }) => name === elementApi);

   const MODAL = {
      width: '100%',
      height: '100%',
      position: 'fixed',
      background: 'rgba(0, 0, 0, .6)',
      top: 0,
      left: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
   };

   const MODAL__CARD = {
      border: '1px solid red',
      background: '#fff',
      padding: '1.25rem',
      borderRadius: '.5rem',
      width: '30rem',
   };

   const BOX__IMG = {
      height: '20.25rem',
   };

   const IMG = {
      maxWidth: '100%',
      maxHeight: '100%',
   };

   if (modal) {
      return (
         <>
            <section style={MODAL}>
               <button onClick={() => setModal(!modal)}>Fechar</button>
               {filterElements.map(({ id, name, description, image_url }) => (
                  <div style={MODAL__CARD} key={id}>
                     <div style={BOX__IMG}>
                        <img style={IMG} src={image_url} alt="" />
                     </div>
                     <h2>{name}</h2>
                     <p>{description}</p>
                  </div>
               ))}
            </section>
         </>
      );
   }

   return null;
};

export default Modal;
