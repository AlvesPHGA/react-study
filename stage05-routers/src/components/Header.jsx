import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';

const Header = () => {
   return (
      <header>
         <nav
            style={{
               display: 'flex',
               alignItems: 'center',
               gap: '1rem',
            }}
         >
            <NavLink to="/" end>
               Home
            </NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="login">Login</NavLink>
         </nav>
      </header>
   );
};

export default Header;
