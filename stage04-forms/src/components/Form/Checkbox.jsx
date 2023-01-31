import React from 'react';
import styled from 'styled-components';

const FieldStyled = styled.label`
   display: flex;
   align-items: center;
   gap: 4px;
   text-transform: capitalize;
`;

const Checkbox = ({ colors, setColors }) => {
   const listColor = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];
   function handleColors({ target }) {
      if (target.checked) {
         setColors([...colors, target.value]);
      } else {
         setColors(colors.filter((color) => color !== target.value));
      }
   }
   return (
      <>
         {listColor.map((item) => (
            <FieldStyled key={item}>
               <input
                  type="checkbox"
                  name={item}
                  id={item}
                  value={item}
                  onChange={handleColors}
               />
               <legend>{item}</legend>
            </FieldStyled>
         ))}

         <p>{colors}</p>
         {/* <label>
            <input
               type="checkbox"
               value="Termos"
               checked={therms}
               onChange={({ target }) => setTherms(target.checked)}
            />
            <legend>Aceito os termos</legend>
         </label> */}
      </>
   );
};

export default Checkbox;
