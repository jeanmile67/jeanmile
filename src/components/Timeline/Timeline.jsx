import React from 'react';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import TimelineItem from './TimelineItem';

export const TimelineWrapper = styled.div`
  background-color: ${themeGet('bg.dark', '#302f4e')};
  border-radius: 20px;
`;

export const VerticalLine = styled.span`
  position: absolute;
  z-index: 0;
  width: 1px;
  background-color: ${themeGet('color.pink', '#FF4C60')};
  top: 30px;
  bottom: 30px;
  left: 49px;
`;

const Timeline = ({ items, icon }) => (
  <TimelineWrapper className="p-4">
    <VerticalLine />
    {items.map((item) => (
      // <ScrollAnimation key={education.id} animateIn="fadeInUp" animateOut="fadeInOut" animateOnce>
      <TimelineItem item={item} icon={icon} />
      // </ScrollAnimation>
    ))}
  </TimelineWrapper>
);

export default Timeline;
