import React from 'react';
import Button from './components/Button';
import UseEffect from './components/UseEffect';
import ExeUseEffect from './Exercises/ExeUseEffect';
import ExeUseState from './Exercises/ExeUseState';
import { GlobalProduct } from './Exercises/GlobalContext';
import ExGlobalContext from './Pages/ExGlobalContext';

function App() {
   return (
      <>
         <GlobalProduct>
            <ExGlobalContext />
            <Button />
         </GlobalProduct>
      </>
   );
}

export default App;
