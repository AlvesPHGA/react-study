import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
   return (
      <>
         <h1>Home</h1>
         <p>This is Home of site</p>
         <div
            style={{
               display: 'flex',
               gap: '1rem',
            }}
         >
            <Link to="product/notebook">Notebook</Link>
            <Link to="product/smartphone">Smartphone</Link>
         </div>
      </>
   );
};

export default Home;
