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

const Form02 = ({
   name,
   setName,
   email,
   setEmail,
   city,
   setCity,
   sexy,
   setSexy,
   fruit,
   setFruit,
}) => {
   return (
      <>
         <FormStyle>
            <Input
               legend="Nome"
               id="name"
               type="text"
               placeholder="Nome"
               value={name}
               setValue={setName}
            />

            <Input
               legend="Email"
               id="email"
               type="text"
               placeholder="example@email.com"
               value={email}
               setValue={setEmail}
            />

            <Select
               options={['São Paulo', 'Minas Gerais', 'Rio de Janeiro']}
               value={city}
               setValue={setCity}
            />

            <Radio
               options={['Feminino', 'Masculino', 'Outro', 'Prefiro não dizer']}
               value={sexy}
               setValue={setSexy}
            />

            <Checkbox
               options={['uva', 'pera', 'acerola', 'limão']}
               value={fruit}
               setValue={setFruit}
            />
         </FormStyle>
      </>
   );
};

export default Form02;
