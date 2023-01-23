import React from 'react';
import Button from './Button';

const UseState = ({ items, setItems }) => {
   return (
      <>
         <ul>
            {items.map((item) => (
               <li key={item}>{item}</li>
            ))}
         </ul>

         <Button legendBtn="Add +" items={items} setItems={setItems} />
      </>
   );
};

export default UseState;
