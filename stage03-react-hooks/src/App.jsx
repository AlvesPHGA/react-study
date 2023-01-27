import React from 'react';
import Button from './components/Button';
import UseEffect from './components/UseEffect';
import ExeUseEffect from './Exercises/ExeUseEffect';
import ExeUseState from './Exercises/ExeUseState';
import { GlobalProduct } from './Exercises/GlobalContext';
import ExGlobalContext from './Pages/ExGlobalContext';
import useFetch from './hooks/useFetch';

function App() {
   const { request, data, loading, error } = useFetch();

   React.useEffect(() => {
      async function fetchData() {
         const { res, json } = await request(
            'https://ranekapi.origamid.dev/json/api/produto/',
         );
      }

      fetchData();
   }, []);

   console.log(data);

   if (error) return <p>{error}</p>;
   if (loading) return <p>Loading...</p>;
   if (data)
      return (
         <>
            {data.map((produto) => {
               <div key={produto.id}>
                  <h2>{produto.nome}</h2>
               </div>;
            })}
         </>
      );
   else return null;
}

export default App;
