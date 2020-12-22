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

  @media (min-width: 1200px) {
    .container {
      max-width: 920px;
    }
  }

  @media (min-width: 1366px) {
    .container {
      max-width: 1080px;
    }
  }

  section {
    background: ${themeGet('color.dark', '#353353')};
    padding-top: 110px;
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

  .spacer {
    clear: both;
  
  
    &[data-height='60'] {
      height: 60px;
    }
  
    &[data-height='70'] {
      height: 70px;
    }
  
    &[data-height='30'] {
      height: 30px;
    }
  
    &[data-height='96'] {
      height: 96px;
    }
  
    &[data-height='20'] {
      height: 20px;
    }
  }

  .rounded {
    border-radius: 20px !important;
  }

  .shadow-dark {
    box-shadow: 0px 5px 20px 0px rgba(69, 67, 96, .1);
  }
`;

export default GlobalStyle;
