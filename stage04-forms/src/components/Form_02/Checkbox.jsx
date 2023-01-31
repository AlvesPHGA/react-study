import React from 'react';
import styled from 'styled-components';

const CheckboxFieldStyled = styled.label`
   display: flex;
   align-items: center;
   gap: 4px;

   & legend {
      text-transform: capitalize;
   }
`;

const Checkbox = ({ options, value, setValue }) => {
   function handleCheckbox({ target }) {
      if (target.checked) {
         setValue([...value, target.value]);
      } else {
         setValue(value.filter((item) => item !== target.value));
      }
   }
   return (
      <>
         {options.map((item) => (
            <CheckboxFieldStyled key={item}>
               <input
                  type="checkbox"
                  name={item}
                  id={item}
                  checked={value.includes(item)}
                  value={item}
                  onChange={handleCheckbox}
               />
               <legend>{item}</legend>
            </CheckboxFieldStyled>
         ))}
      </>
   );
};

export default Checkbox;
