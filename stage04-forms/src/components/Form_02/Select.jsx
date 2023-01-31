import React from 'react';
import styled from 'styled-components';

const SelectStyled = styled.select`
   padding: 4px 8px;
   font-size: 18px;
`;

const Select = ({ options, value, setValue }) => {
   function handleSelect({ target }) {
      setValue(target.value);
   }
   return (
      <>
         <h2>Estado</h2>
         <SelectStyled
            name="state"
            id="estado"
            value={value}
            onChange={handleSelect}
         >
            <option value="" disabled>
               Selecione o estado
            </option>
            {options.map((item, index) => (
               <option key={index} value={item}>
                  {item}
               </option>
            ))}
         </SelectStyled>
      </>
   );
};

export default Select;
