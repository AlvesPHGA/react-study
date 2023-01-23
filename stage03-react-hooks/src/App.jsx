import React from 'react';
import Button from './components/Button';
import Modal from './components/Modal';
import UseState from './components/UseState';

function App() {
   let list = ['Pera', 'Limão', 'Morango'];

   const [items, setItems] = React.useState(list);

   return (
      <>
         <UseState items={items} setItems={setItems} />
      </>
   );
}

export default App;
