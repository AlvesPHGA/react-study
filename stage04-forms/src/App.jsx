import React from 'react';
import Form from './components/Form/Form';

function App() {
   const [form, setForm] = React.useState('');

   return (
      <>
         <Form form={form} setForm={setForm} />
      </>
   );
}

export default App;
