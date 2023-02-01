import React from 'react';

const types = {
   cep: {
      regex: /^\d{5}-?\d{3}$/,
      message: 'CPF invalido',
   },
};

const useForm = (type) => {
   const [value, setValue] = React.useState('');
   const [error, setError] = React.useState(null);

   function validate(value) {
      if (value.lenght === 0) {
         setError('Preencher campo');
         return false;
      } else if (!types[type].regex.test(value)) {
         setError(types.cep.message);
         return false;
      } else {
         setError(null);
         return true;
      }
   }

   return {
      value,
      setValue,
   };
};

export default useForm;
