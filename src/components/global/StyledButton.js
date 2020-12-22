import React from 'react';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { Link } from 'react-scroll';

const StyledButtonWrapper = styled(Link)`
  border-radius: 30px;
  font-size: 16px;
  font-weight: 700;
  overflow: hidden;
  line-height: 1;
  padding: 12px 32px;
  position: relative;
  color: ${themeGet('color.white', '#fff')} !important;
  background: ${themeGet('color.pink', '#FF4C60')};
  display: inline-block;
  vertical-align: middle;
  position: relative;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);

  &:hover {
    color: ${themeGet('color.white', '#fff')};
    -webkit-animation-name: button-push;
    animation-name: button-push;
    -webkit-animation-duration: 0.3s;
    animation-duration: 0.3s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
  }

  &:focus {
    box-shadow: none;
  }

  &:focus {
    outline: 0;
  }

  @keyframes button-push {
    50% {
      -webkit-transform: scale(0.8);
      transform: scale(0.8);
    }

    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  @keyframes hvr-push {
    50% {
      -webkit-transform: scale(0.8);
      transform: scale(0.8);
    }

    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`;

const StyledButton = ({ msg }) => {
  return (
    <StyledButtonWrapper to="section-contact" spy={true} smooth={true} duration={500}>
      {msg}
    </StyledButtonWrapper>
  );
};

export default StyledButton;
