import { themeGet } from '@styled-system/theme-get';
import React from 'react';
import styled from 'styled-components';

const TimelineWrapper = styled.div``;

const Timeline = (education) => {
  const { years, title, content } = education;

  return (
    // <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" animateOnce>
    <TimelineWrapper>
      <div className="content">
        <span className="time">{years}</span>
        <h3 className="title">{title}</h3>
        <p>{content}</p>
      </div>
    </TimelineWrapper>
    // </ScrollAnimation>
  );
};

export default Timeline;
