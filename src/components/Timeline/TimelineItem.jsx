import React from 'react';
import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { MapPin } from 'react-feather';

export const TimelineItemWrapper = styled.div`
  display: flex;
  padding-left: 50px;
  padding-right: 20px;
  position: relative;
  margin-bottom: 30px;
  width: 100%;

  &:last-child {
    margin-bottom: 10px;
  }

  .title,
  p {
    color: #fff;
  }

  p {
    margin-bottom: 0px;
  }

  svg {
    position: absolute;
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
`;

const Time = styled.span`
  color: ${themeGet('color.lightdark', '#8b88b1')};
  font-size: 15px;
`;

const Place = styled.p`
  display: flex;
  align-items: center;
  margin-top: 10px;

  svg {
    position: static;
    margin-right: 10px;
    flex: none;
  }

  a {
    color: ${themeGet('color.pink', '#FF4C60')};
  }
`;

const LogoTimeline = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 0.25rem !important;
  width: 200px;
  height: 200px;

  img {
    border-radius: 0.25rem !important;
    padding: 10px;
    margin-bottom: 0px;
  }
`;

const InfoTimeLine = styled.div`
  flex-grow: 2;
`;

const TimelineItem = ({ item, icon }) => {
  const { years, title, content, location, website, logo } = item;

  return (
    <TimelineItemWrapper key={item.id}>
      {icon}
      <InfoTimeLine>
        <Time>{years}</Time>
        <h3 className="title">{title}</h3>
        <p>{content}</p>
        <Place>
          <MapPin size={25} />
          <a to={website}>{location}</a>
        </Place>
      </InfoTimeLine>
      <LogoTimeline>
        <img src={logo} alt="logo" />
      </LogoTimeline>
    </TimelineItemWrapper>
  );
};

export default TimelineItem;
