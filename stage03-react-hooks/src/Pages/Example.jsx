import React from 'react';
import { GlobalContext } from '../components/GlobalContext';

const Example = () => {
   const global = React.useContext(GlobalContext);

   function handleCount() {
      global.setCount((count) => count + 1);
   }

   return (
      <>
         <p>{global.count}</p>
         <button onClick={handleCount}>Click me</button>
      </>
   );
};

export default Example;
