import React from 'react';
import Checkbox from './components/Form/Checkbox';
import Form from './components/Form/Form';
import Form02 from './components/Form_02/Form02';

function App() {
   const [cep, setCep] = React.useState('');

   const [city, setCity] = React.useState('');
   const [sexy, setSexy] = React.useState('');
   const [fruit, setFruit] = React.useState([]);
   return (
      <>
         <Form02 cep={cep} setCep={setCep} />
      </>
   );
}

export default App;
