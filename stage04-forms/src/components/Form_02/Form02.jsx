import React from 'react';
import styled from 'styled-components';
import { InputStyled } from '../Form/Input';
import Checkbox from './Checkbox';
import Input from './Input';
import Radio from './Radio';
import Select from './Select';

const FormStyle = styled.form`
   width: fit-content;
   height: fit-content;
   padding: 20px;
   border: 1px solid red;
   display: flex;
   flex-direction: column;
   gap: 10px;
`;

const Form02 = ({ cep, setCep }) => {
   return (
      <>
         <FormStyle>
            <Input
               legend="Cep"
               id="cep"
               type="text"
               placeholder="00000-000"
               value={cep}
               setValue={setCep}
            />
         </FormStyle>
      </>
   );
};

export default Form02;
