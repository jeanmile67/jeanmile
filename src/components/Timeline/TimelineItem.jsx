import React from 'react';
import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';

export const TimelineItemWrapper = styled.div`
  padding-left: 50px;
  position: relative;
  margin-bottom: 30px;
  width: 100%;

  .title,
  p {
    color: #fff;
  }

  p {
    margin-bottom: 0px;
  }

  svg {
    position: absolute;
    z-index: 2;
    background-color: ${themeGet('bg.dark', '#302f4e')};
    color: ${themeGet('color.pink', '#FF4C60')};
    left: -7px;
  }

  h3 {
    font-size: 20px;
    margin: 10px 0;
  }

  .content p {
    margin: 0;
  }

  .time {
    color: ${themeGet('color.lightdark', '#8b88b1')};
    font-size: 15px;
  }
`;

const TimelineItem = ({ item, icon }) => {
  const { years, title, content } = item;

  return (
    <TimelineItemWrapper key={item.id}>
      {icon}
      <span className="time">{years}</span>
      <h3 className="title">{title}</h3>
      <p>{content}</p>
    </TimelineItemWrapper>
  );
};

export default TimelineItem;
