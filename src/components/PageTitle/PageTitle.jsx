import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';
import VisibilitySensor from 'react-visibility-sensor';

const SectionTitle = styled(animated.h2)`
  color: ${themeGet('color.white', '#fff')};
  font-size: 36px;
  margin: 0;
  margin-left: 14px;
  position: relative;
  margin-bottom: 60px;

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

const AnimatedTitle = ({ isVisible, children }) => {
  const spring = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0px)' : 'translateX(-200px)',
  });

  return (
    <SectionTitle style={spring} className="section-title">
      {children}
    </SectionTitle>
  );
};

const PageTitle = ({ title }) => {
  const [isVisible, setVisibility] = useState(false);

  const onChange = (visiblity) => visiblity && setVisibility(visiblity);

  return (
    <>
      <VisibilitySensor onChange={onChange}>
        <AnimatedTitle isVisible={isVisible}>{title}</AnimatedTitle>
      </VisibilitySensor>
    </>
  );
};

export default PageTitle;
