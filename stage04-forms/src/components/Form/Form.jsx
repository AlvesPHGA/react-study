import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import { InputStyled } from './Input';

const FormStyled = styled.form`
   padding: 1rem;
   border: 1px solid red;
   display: flex;
   flex-direction: column;
   gap: 10px;
`;

const listInfo = [
   {
      id: 'nome',
      type: 'text',
      legend: 'Nome',
   },
   {
      id: 'email',
      type: 'text',
      legend: 'Email',
   },
   {
      id: 'senha',
      type: 'password',
      legend: 'Senha',
   },
   {
      id: 'cep',
      type: 'text',
      legend: 'Cep',
   },
   {
      id: 'rua',
      type: 'text',
      legend: 'Rua',
   },
   {
      id: 'numero',
      type: 'number',
      legend: 'Numero',
   },
   {
      id: 'bairro',
      type: 'text',
      legend: 'Bairro',
   },
   {
      id: 'cidade',
      type: 'text',
      legend: 'Cidade',
   },
   {
      id: 'estado',
      type: 'text',
      legend: 'Estado',
   },
];

const Form = ({ form, setForm }) => {
   const [response, setResponse] = React.useState(null);

   function handleChange({ target }) {
      const { id, value } = target;
      setForm({ ...form, [id]: value });
   }

   function handleSubmit(ev) {
      ev.preventDefault();

      fetch('https://ranekapi.origamid.dev/json/api/usuario', {
         method: 'POST',
         headers: {
            'Content-type': 'application/json',
         },
         body: JSON.stringify(form),
      }).then((res) => setResponse(res));
   }
   return (
      <>
         <FormStyled onSubmit={handleSubmit}>
            {listInfo.map(({ id, type, legend }) => (
               <label key={id} htmlFor={id}>
                  <legend>{legend}</legend>
                  <InputStyled
                     type={type}
                     name={id}
                     id={id}
                     onChange={handleChange}
                  ></InputStyled>
               </label>
            ))}
            {response && <p>Formulario enviado com sucesso</p>}
            <Button />
         </FormStyled>
      </>
   );
};

export default Form;
