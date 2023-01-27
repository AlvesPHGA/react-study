import React from 'react';

const useFetch = () => {
   const [data, setData] = React.useState(null);
   const [error, setError] = React.useState(null);
   const [loading, setLoading] = React.useState(null);

   const request = React.useCallback(async (url, options) => {
      let res;
      let json;

      try {
         setError(null);
         setLoading(true);

         res = await fetch(url);
         json = await res.json();
      } catch (er) {
         json = null;
         setError('Ocorreu um erro');
      } finally {
         setData(json);
         setLoading(false);
         return { res, json };
      }
   });

   return { data, error, loading, request };
};

export default useFetch;
