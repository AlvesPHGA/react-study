import React from 'react';
import ExeUseState from './Exercises/ExeUseState';

function App() {
   const [data, setData] = React.useState(null);
   const [loading, setLoading] = React.useState(null);
   return (
      <>
         <ExeUseState data={data} setData={setData} loading={loading} />
      </>
   );
}

export default App;
