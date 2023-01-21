import React from 'react';
import LinkNav from './Nav/LinkNav';

const Header = () => {
   return (
      <>
         <header
            style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}
         >
            <LinkNav url="./" legendLink="Home" />
            <LinkNav url="./products" legendLink="Produtos" />
         </header>
      </>
   );
};

export default Header;
