import React from 'react';

const Select = () => {
   return (
      <>
         <select name="city" id="city">
            <option value="">Selecione...</option>
            <option value="sorocaba">Sorocaba</option>
            <option value="itu">Itu</option>
            <option value="cerquilho">Cerquilho</option>
            <option value="salto">Salto</option>
         </select>
      </>
   );
};

export default Select;
