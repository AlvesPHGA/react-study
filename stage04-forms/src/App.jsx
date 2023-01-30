import React from 'react';
import { Button } from './components/Form/Button.style';
import { Form } from './components/Form/Form.style';
import { Input } from './components/Form/Input.style';

function App() {
   const [name, setName] = React.useState('');
   const [password, setPassword] = React.useState('');

   function handleSubmit(ev) {
      ev.preventDefault();
      console.log(name, password);
   }
   return (
      <>
         <Form onSubmit={handleSubmit}>
            <Input
               type="text"
               name="name"
               value={name}
               onChange={(ev) => setName(ev.target.value)}
               placeholder="Nome"
            ></Input>
            <Input
               type="password"
               name="password"
               value={password}
               onChange={(ev) => setPassword(ev.target.value)}
               placeholder="Senha"
            ></Input>
            <Button>Enviar</Button>
         </Form>
      </>
   );
}

export default App;
