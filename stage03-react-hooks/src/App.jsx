import React from 'react';
import UseEffect from './components/UseEffect';
import ExeUseEffect from './Exercises/ExeUseEffect';
import ExeUseState from './Exercises/ExeUseState';

function App() {
   const [data, setData] = React.useState(null);

   return (
      <>
         <ExeUseEffect data={data} setData={setData} />
      </>
   );
}

export default App;
