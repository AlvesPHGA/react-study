import React from 'react';
import { GlobalStorage } from './components/GlobalContext';
import UseEffect from './components/UseEffect';
import ExeUseEffect from './Exercises/ExeUseEffect';
import ExeUseState from './Exercises/ExeUseState';
import Example from './Pages/Example';

function App() {
   return (
      <>
         <GlobalStorage>
            <Example />
         </GlobalStorage>
      </>
   );
}

export default App;
