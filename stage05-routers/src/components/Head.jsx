import React from 'react';

const Head = (props) => {
   React.useEffect(() => {
      document.title = `Site | ${props.title}`;

      console.log(props);
   }, [props]);
   return <></>;
};

export default Head;
