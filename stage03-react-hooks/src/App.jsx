import React from 'react';
import UseEffect from './components/UseEffect';
import ExeUseState from './Exercises/ExeUseState';

function App() {
   const [data, setData] = React.useState(null);
   const [count, setCount] = React.useState(0);
   return (
      <>
         <UseEffect
            data={data}
            setData={setData}
            count={count}
            setCount={setCount}
         />
      </>
   );
}

export default App;
