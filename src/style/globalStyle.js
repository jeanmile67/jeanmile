import { createGlobalStyle } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import 'bootstrap/dist/css/bootstrap.min.css';

const GlobalStyle = createGlobalStyle`
  body {
    color: #5E5C7F;
    background-color: #F9F9FF;
    line-height: 1.7;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .content {
    margin-left: 290px;
    @include transition(.3s);
  
    &.open {
      opacity: .8;
      -webkit-transform: translateX(290px);
      -moz-transform: translateX(290px);
      -ms-transform: translateX(290px);
      -o-transform: translateX(290px);
      transform: translateX(290px);
    }
  }
`;

export default GlobalStyle;
