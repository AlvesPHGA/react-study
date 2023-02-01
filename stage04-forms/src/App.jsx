import React from 'react';
import Checkbox from './components/Form/Checkbox';
import Form from './components/Form/Form';
import Form02 from './components/Form_02/Form02';
import Input from './components/Form_02/Input';
import useForm from './Hooks/useForm';

function App() {
   const cep = useForm('cep');
   const name = useForm();

   function handleSubmit(ev) {
      ev.preventDefault();
      if (cep.validate() && name.validate()) {
         alert('Dados enviados com sucesso');
      } else {
         alert('Ocorreu um pequeo problema, favor tentar mais tarde');
      }
   }
   return (
      <>
         <form>
            <Input
               legend="Nome"
               id="name"
               type="text"
               placeholder="Seu nome"
               {...name}
            />

            <Input
               legend="Cep"
               id="cep"
               type="text"
               placeholder="00000-000"
               {...cep}
            />

            <button onClick={handleSubmit}>Enviar</button>
         </form>
      </>
   );
}

export default App;
