import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { Menu } from 'react-feather';
import transition from '../../style/transitionStyle';

const HeaderWrapper = styled.header`
  color: ${themeGet('color.white', '#ffffff')};
  border-right: solid 1px rgba(255, 255, 255, 0.1);
  background: ${themeGet('color.dark', '#353353')};
  padding: 50px 40px 40px;
  position: fixed;
  left: 0;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100vh;
  min-height: 100vh;
  top: 0;
  width: 290px;
  z-index: 1;
  -webkit-transform: translateX(0);
  -moz-transform: translateX(0);
  -ms-transform: translateX(0);
  -o-transform: translateX(0);
  transform: translateX(0);
  ${transition(0.3)}

  &.open {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
    ${transition(0.3)}
  }

  .site-logo {
  }

  .vertical-menu {
    list-style: none;
    padding: 0;
    margin-bottom: 130px;
    margin-top: 130px;
  }

  .vertical-menu li.openmenu > a,
  .vertical-menu li.openmenu > button {
    color: #000;
  }

  .vertical-menu li.openmenu .switch {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .vertical-menu li {
    padding: 8px 0;
    position: relative;
    list-style: none;
    ${transition(0.3)}

    a,
    button {
      &:hover,
      &.active {
        color: ${themeGet('color.yellow', '#FFD15C')};
        cursor: pointer;
      }
    }

    svg {
      color: ${themeGet('color.yellow', '#FFD15C')};
      margin-right: 20px;
    }
  }

  .vertical-menu li .switch {
    font-size: 30px;
    display: inline-block;
    padding: 0 14px;
    line-height: 1;
    cursor: pointer;
    color: #000;
    position: absolute;
    top: 24px;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    ${transition(0.3)}
    -webkit-backface-visibility: hidden;
  }

  .vertical-menu li a,
  .vertical-menu li button {
    background: transparent;
    border: 0;
    outline: 0;
    color: ${themeGet('color.white', '#fff')};
    font-family: $fonthead;
    font-size: 16px;
    font-weight: 700;
    width: 100%;
    text-decoration: none;
    position: relative;
    padding: 0;
    width: auto;

    &.nav-link {
      display: initial;
      padding: 0;
    }
  }

  .vertical-menu li .nav-link.active {
    color: ${themeGet('color.yellow', '#FFD15C')};
  }

  .submenu {
    display: none;
    padding: 0;
  }

  .submenu li a {
    color: #000;
    font-size: 18px;
    font-weight: 700;

    &:after {
      height: 3px;
    }

    &:hover:after {
      width: 100%;
      height: 3px;
    }
  }

  .submenu li a:hover {
    color: #000;
  }

  .footer {
    margin-top: auto;
  }

  .copyright {
    color: #9c9ab3;
    font-size: 14px;
  }

  &.light {
    background: #f9f9ff;
    border-right: solid 1px rgba(0, 0, 0, 0.05);

    .vertical-menu li .nav-link.active {
      color: $colorpink;
    }

    .vertical-menu li a {
      color: $colordark;

      &:hover {
        color: $colorpink;
      }
    }

    .vertical-menu li i {
      color: $colorpink;
    }
  }
`;

export const MobileHeaderWrapper = styled.div`
  padding: 20px 0;
  display: block;

  &.open {
    -webkit-transform: translateX(290px);
    -moz-transform: translateX(290px);
    -ms-transform: translateX(290px);
    -o-transform: translateX(290px);
    transform: translateX(290px);
  }

  &.light {
    background: #f9f9ff;

    .menu-icon span {
      background: ${themeGet('color.dark', '#353353')};

      &:before,
      &:after {
        background: ${themeGet('color.dark', '#353353')};
      }
    }
  }
`;

export const MenuIcon = styled(Menu)`
  color: ${themeGet('color.white', '#ffffff')};
  cursor: pointer;
`;

export const LogoCenter = styled.div`
  margin-left: 'auto';
  margin-right: 'auto';
`;

export default HeaderWrapper;
