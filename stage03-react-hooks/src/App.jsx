import React from 'react';
import Button from './components/Button';
import Modal from './components/Modal';

function App() {
   const [modal, setModal] = React.useState(false);

   return (
      <>
         <Modal modal={modal} setModal={setModal} />
         <Button legendBtn="Clink me" setModal={setModal} />
      </>
   );
}

export default App;
