import React from 'react';
import styled from 'styled-components';

const QuestionFieldStyle = styled.fieldset`
   width: 50rem;
   padding: 20px;

   & legend {
      font-size: 20px;
      font-weight: 800;
   }

   & label {
      display: flex;
      align-items: center;
      gap: 4px;

      & legend {
         font-size: 18px;
         font-family: monospace;
         font-weight: 500;
      }
   }
`;

const Radio = ({ question, options, id, onChange, value, active }) => {
   if (active === false) return null;
   return (
      <>
         <QuestionFieldStyle key={id}>
            <legend>{question}</legend>

            {options.map((item) => (
               <label key={item}>
                  <input
                     type="radio"
                     name={id}
                     id={id}
                     value={item}
                     checked={value === item}
                     onChange={onChange}
                  />
                  <legend>{item}</legend>
               </label>
            ))}
         </QuestionFieldStyle>
      </>
   );
};

export default Radio;
