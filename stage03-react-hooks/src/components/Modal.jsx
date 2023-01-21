import React from 'react';
import Button from './Button';

const Modal = ({ modal, setModal }) => {
   if (modal)
      return (
         <>
            <h1>Modal aberto</h1>
            <button onClick={() => setModal(false)}>Fechar modal</button>
         </>
      );
   return null;
};

export default Modal;
