import React from 'react';
import Products from './Pages/Products';
import './style/App.css';

function App() {
   const [dataApi, setDataApi] = React.useState([]);

   return (
      <>
         <Products dataApi={dataApi} setDataApi={setDataApi} />
      </>
   );
}

export default App;
