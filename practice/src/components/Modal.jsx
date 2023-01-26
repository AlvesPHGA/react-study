import React from 'react';

const Modal = ({ dataApi, modal, setModal, elementApi }) => {
   console.log(elementApi);
   if (modal) {
      return (
         <>
            <section>{/* <h2>{elementApi.name}</h2> */}</section>
         </>
      );
   }

   return null;
};

export default Modal;
