import { createGlobalStyle } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const GlobalStyle = createGlobalStyle`
  body {
    color: #5E5C7F;
    background-color: #F9F9FF;
    line-height: 1.7;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyle;
