import React from 'react';

const Button = ({ legendBtn, data, setData }) => {
   async function fetchProduct(legend) {
      const res = await fetch(
         `https://ranekapi.origamid.dev/json/api/produto/${legend}`,
      );
      const data = await res.json();
      console.log(data);
   }

   function handleClick(ev) {
      const legend = ev.target.innerHTML;
      data = fetchProduct(legend);
      console.log(data);
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
