import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const ExperiencesWrapper = styled.section``;

export const TimelineWrapper = styled.div`
  position: relative;

  .timeline-container {
    padding-left: 50px;
    margin-bottom: 50px;
    position: relative;
    background-color: inherit;
    width: 100%;
    &:last-of-type {
      margin-bottom: 0;
    }
  }

  .edu .timeline-container::after {
    content: '\e019';
    background: #fff;
    font-family: 'simple-line-icons';
    font-size: 24px;
    color: ${themeGet('color.pink', '#FF4C60')};
    position: absolute;
    left: -7px;
    top: 0;
    z-index: 1;
  }

  .exp .timeline-container::after {
    content: '\e04b';
    background: #fff;
    font-family: 'simple-line-icons';
    font-size: 24px;
    color: ${themeGet('color.pink', '#FF4C60')};
    position: absolute;
    left: -7px;
    top: 0;
    z-index: 1;
  }

  .content {
    position: relative;
  }

  .content .time {
    color: #8b88b1;
    font-size: 14px;
  }

  .content h3 {
    font-size: 20px;
    margin: 10px 0;
  }

  .content p {
    margin: 0;
  }

  span.line {
    position: absolute;
    width: 1px;
    background-color: color: ${themeGet('color.pink', '#FF4C60')};;
    top: 30px;
    bottom: 30px;
    left: 34px;
  }
`;

export default ExperiencesWrapper;
