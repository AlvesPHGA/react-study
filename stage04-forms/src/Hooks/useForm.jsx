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
      if (type === false) return true;
      if (value.length === 0) {
         setError('Preencher campo');
         return false;
      } else if (types[type] && !types[type].regex.test(value)) {
         setError(types[type].message);
         return false;
      } else {
         setError(null);
         return true;
      }
   }

   function onChange({ target }) {
      if (error) setError(target.value);
      setValue(target.value);
   }

   return {
      value,
      setValue,

      error,

      onChange,

      onBlur: () => validate(value),
      validate: () => validate(value),
   };
};

export default useForm;
