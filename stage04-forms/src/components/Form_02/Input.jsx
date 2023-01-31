import React from 'react';
import styled from 'styled-components';

const InputFieldStyled = styled.label`
   & legend {
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 4px;
   }

   & input {
      width: 200px;
      padding: 4px 10px;
      font-size: 18px;
   }
`;

const Input = ({ legend, id, type, placeholder, value, setValue }) => {
   function handleChange({ target }) {
      setValue(target.value);
   }
   return (
      <>
         <InputFieldStyled>
            <legend>{legend}</legend>
            <input
               id={id}
               name={id}
               type={type}
               placeholder={placeholder}
               onChange={handleChange}
            />
         </InputFieldStyled>
      </>
   );
};

export default Input;
