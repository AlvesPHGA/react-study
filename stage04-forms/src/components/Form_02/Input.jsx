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
   const [error, setError] = React.useState(null);

   function validCep(value) {
      const regex = /^\d{5}-?\d{3}$/;
      const cep = regex.test(value);

      if (value.length === 0) {
         setError('Preencher o campo');
         return false;
      } else if (!cep) {
         setError('Cep invalido');
         return false;
      } else {
         setError(null);
         return true;
      }
   }

   function handleBlur({ target }) {
      console.log(validCep(target.value));
   }

   function handleChange({ target }) {
      if (error) validCep(target.value);

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
               onBlur={handleBlur}
               onChange={handleChange}
            />
         </InputFieldStyled>
         {error && <span>{error}</span>}
      </>
   );
};

export default Input;
