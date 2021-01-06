import React from 'react';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { Link } from 'react-scroll';

const MouseWrapper = styled(Link)`
  color: ${themeGet('color.white', '#fff')};
  font-size: 14px;
  display: block;
  max-width: 100px;
  margin: auto;
  text-align: center;
  cursor: pointer;

  span {
    color: ${themeGet('color.white', '#fff')};
  }

  &:hover {
    color: ${themeGet('color.white', '#fff')};
  }
`;

const Mouse = styled.span`
  border: solid 2px ${themeGet('color.white', '#fff')};
  border-radius: 16px;
  display: block;
  margin: auto;
  margin-top: 10px;
  height: 26px;
  position: relative;
  width: 20px;
`;

const Wheel = styled.span`
  background: ${themeGet('color.white', '#fff')};
  border-radius: 100%;
  display: block;
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  height: 4px;
  width: 4px;
  -webkit-animation: ani-mouse 2s linear infinite;
  -moz-animation: ani-mouse 2s linear infinite;
  animation: ani-mouse 2s linear infinite;
`;

const ScrollDownMouse = () => (
  <MouseWrapper to="section-about" spy smooth duration={500} className="mouse-wrapper">
    <span>Scroll Down</span>
    <Mouse>
      <Wheel />
    </Mouse>
  </MouseWrapper>
);

export default ScrollDownMouse;
