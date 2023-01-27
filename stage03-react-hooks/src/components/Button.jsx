import React from 'react';
import { GlobalContext } from '../Exercises/GlobalContext';

const Button = () => {
   const { handleClean } = React.useContext(GlobalContext);
   return <button onClick={handleClean}>Button</button>;
};

export default Button;
