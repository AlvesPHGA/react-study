import React from 'react';
import Button from './Button';
import Input from './Input';
import Select from './Select';

const Form = () => {
   return (
      <>
         Form
         <label htmlFor="name">
            <legend>Nome</legend>
            <Input type="text" name="name" id="name" />
         </label>
         <label htmlFor="city">
            <legend>Cidade</legend>
            <Select />
         </label>
         <Button legendBtn="Enviar" />
      </>
   );
};

export default Form;
