import React from 'react';

const Button = ({ legendBtn, setModal }) => {
   return (
      <button
         style={{
            width: 'fit-content',
            height: 'fit-content',
            padding: '.25rem .75rem',
            background: '#ccc',
         }}
         onClick={() => setModal(true)}
      >
         {legendBtn}
      </button>
   );
};

export default Button;
