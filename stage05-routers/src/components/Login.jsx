import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
   const navigate = useNavigate();

   function handleClick() {
      navigate('/about');
   }

   return (
      <div>
         <h1>Login</h1>
         <button
            onClick={handleClick}
            style={{
               width: 'fit-content',
               height: 'fit-content',
               padding: '.5rem 1rem',
               color: 'black',
               fontWeight: 800,
               textTransform: 'uppercase',
               background: '#0000fc',
            }}
         >
            Login
         </button>
      </div>
   );
};

export default Login;
