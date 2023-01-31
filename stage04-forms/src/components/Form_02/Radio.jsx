import React from 'react';
import styled from 'styled-components';

const RadioFieldStyled = styled.label`
   display: flex;
   gap: 4px;
`;

const Radio = ({ options, value, setValue }) => {
   function handleRadio({ target }) {
      setValue(target.value);
   }
   return (
      <>
         {options.map((option) => (
            <RadioFieldStyled key={option}>
               <input
                  type="radio"
                  name=""
                  id=""
                  value={option}
                  checked={option === value}
                  onChange={handleRadio}
               />
               <legend>{option}</legend>
            </RadioFieldStyled>
         ))}
      </>
   );
};

export default Radio;
