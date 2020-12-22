import React from 'react';
import { themeGet } from '@styled-system/theme-get';
import ScrollAnimation from 'react-animate-on-scroll';
import styled from 'styled-components';

const SectionTitle = styled.h2`
  color: ${themeGet('color.white', '#fff')};
  font-size: 36px;
  margin: 0;
  margin-left: 14px;
  position: relative;

  &:before {
    content: '';
    background: url('https://bolby-react.vercel.app/images/dots-bg-light.svg');
    display: block;
    height: 37px;
    left: -14px;
    top: -14px;
    position: absolute;
    width: 37px;
  }
`;

const PageTitle = ({ title }) => {
  return (
    <>
      <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" animateOnce={true}>
        <SectionTitle className="section-title">{title}</SectionTitle>
      </ScrollAnimation>
      <div className="spacer" data-height="60"></div>
    </>
  );
};

export default PageTitle;
