import React from 'react';

const Example = ({ data }) => {
   return (
      <>
         {data.map((dt) => {
            <h2 key={dt.title}></h2>;
         })}
      </>
   );
};

export default Example;
