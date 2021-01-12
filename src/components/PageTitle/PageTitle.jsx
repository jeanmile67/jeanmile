import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
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

const FadeInDirection = ({ isVisible, children }) => {
  const spring = useSpring({
    opacity: isVisible ? 1 : 0,
    duration: config.slow,
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
    <div>
      <VisibilitySensor onChange={onChange}>
        <FadeInDirection isVisible={isVisible}>{title}</FadeInDirection>
      </VisibilitySensor>
    </div>
  );
};

export default PageTitle;
