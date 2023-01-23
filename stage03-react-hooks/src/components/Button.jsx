import React from 'react';

const Button = ({ legendBtn, items, setItems }) => {
   function handleClick() {
      setItems([...items, 'Cenoura']);
   }
   return (
      <button
         style={{
            width: 'fit-content',
            height: 'fit-content',
            padding: '.25rem .75rem',
            background: '#ccc',
            margin: '0 auto',
         }}
         onClick={handleClick}
      >
         {legendBtn}
      </button>
   );
};

export default Button;
