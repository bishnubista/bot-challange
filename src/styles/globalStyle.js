import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
html,
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
*,
*::after,
*::before {
  box-sizing: inherit;
},

img {
    border: 0;
}
`;
