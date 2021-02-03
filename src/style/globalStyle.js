import { createGlobalStyle } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import 'bootstrap/dist/css/bootstrap.min.css';
import transition from './transitionStyle';

const GlobalStyle = createGlobalStyle`
  body {
    color: ${themeGet('color.white', '#fff')};
    background: ${themeGet('color.dark', '#353353')};
    line-height: 1.7;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  main.content {
    margin-left: 290px;
    ${transition(0.3)}
  
    &.open {
      opacity: .8;
      -webkit-transform: translateX(290px);
      -moz-transform: translateX(290px);
      -ms-transform: translateX(290px);
      -o-transform: translateX(290px);
      transform: translateX(290px);
    }
  }
  

  a {
    color: ${themeGet('color.pink', '#FF4C60')};
    outline: 0;
    ${transition(0.2)}

    &:hover {
      color: ${themeGet('color.white', '#fff')};
      text-decoration: none;
      cursor: pointer;
    }

    &:focus {
      outline: 0;
    }
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

  @media only screen and (max-width: 991px) {
    header.desktop-header-1 {
      -webkit-transform: translateX(-290px);
      -moz-transform: translateX(-290px);
      -ms-transform: translateX(-290px);
      -o-transform: translateX(-290px);
      transform: translateX(-290px);
    }
    
    header.mobile-header-1 {
      display: block;
    }

    main.content {
      margin-left: 0px;
    }

    header.desktop-header-2 {
      -webkit-transform: translateX(-110px);
      -moz-transform: translateX(-110px);
      -ms-transform: translateX(-110px);
      -o-transform: translateX(-110px);
      transform: translateX(-110px);
    }
    
    .desktop-header-3 .nav-link {
      padding: 7px 0;
    }
  }

  section {
    background: ${themeGet('color.dark', '#353353')};
    padding-top: 110px;
  }

  main {
    ${transition(0.2)}
    
    &.open {
      margin-left: 290px;
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

  p { 
    color: ${themeGet('color.white', '#fff')};
  }
`;

export default GlobalStyle;
