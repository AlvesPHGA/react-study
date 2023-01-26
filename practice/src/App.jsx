import React from 'react';
import Example from './Page/Example';
import './style/App.css';

function App() {
   const [data, setData] = React.useState([]);

   const apiKey =
      'NTM4ODVfMTY3NDY1MTYwNV81MGE0YTRjMjlmY2E0NzBlNzAxNDRiM2Q2MWFkYWVmMTE0ZWM4NDFj';

   React.useEffect(() => {
      fetch('https://api.punkapi.com/v2/beers')
         .then((res) => res.json())
         .then((datas) => setData(datas));
   }, []);

   // const filterData = data.filter(({ type }) => type === 'Effect Monster');

   console.log(data[0]);

   return (
      <>
         <section
            style={{
               display: 'flex',
               flexFlow: 'nowrap row',
            }}
         >
            {data.map(({ id, name, image_url }) => (
               <div
                  style={{
                     width: 'fit-content',
                     display: 'flex',
                     flexDirection: 'column',
                     alignItems: 'center',
                     border: '1px solid red',
                  }}
                  key={id}
               >
                  <div
                     style={{
                        width: '100%',
                        height: '12rem',
                     }}
                  >
                     <img
                        style={{
                           maxWidth: '100%',
                           maxHeight: '100%',
                        }}
                        src={image_url}
                        alt=""
                     />
                  </div>
                  <h2
                     style={{
                        wordBreak: 'break-word',
                        width: '236px',
                     }}
                  >
                     {name}
                  </h2>
               </div>
            ))}
         </section>
      </>
   );
}

export default App;
