import styled from 'styled-components';

export const Button = styled.button`
   width: 200px;
   height: 100px;
   background: ${(prop) =>
      !prop['data-button']
         ? prop.theme.colors.danger
         : prop.theme.colors.success};
   border: none;
   cursor: pointer;
`;
