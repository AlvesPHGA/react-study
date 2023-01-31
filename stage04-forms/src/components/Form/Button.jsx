import styled from 'styled-components';

const ButtonStyled = styled.button`
   width: fit-content;
   height: fit-content;
   padding: 4px 10px;
   background: violet;
   border: 2px solid violet;
   border-radius: 4px;
`;

const Button = () => {
   return (
      <>
         <ButtonStyled>Enviar</ButtonStyled>
      </>
   );
};

export default Button;
