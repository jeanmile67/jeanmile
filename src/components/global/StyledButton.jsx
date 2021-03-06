import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { Link } from 'react-scroll';

const ButtonPush = keyframes`
  50% {
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`;

const StyledLinkWrapper = css`
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
    cursor: pointer;
    color: ${themeGet('color.white', '#fff')};
    -webkit-animation-name: ${ButtonPush};
    animation-name: ${ButtonPush};
    -webkit-animation-duration: 0.3s;
    animation-duration: 0.3s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
  }
`;

const StyledButtonWrapper = styled(Link)`
  ${StyledLinkWrapper}
`;

const StyledLinkExtWrapper = styled.a`
  ${StyledLinkWrapper}
`;

const StyledButton = ({ scrollTo, msg }) => (
  <StyledButtonWrapper to={scrollTo} spy smooth duration={500}>
    {msg}
  </StyledButtonWrapper>
);

export const StyledLinkExt = ({ href, msg }) => <StyledLinkExtWrapper href={href}>{msg}</StyledLinkExtWrapper>;

export default StyledButton;
