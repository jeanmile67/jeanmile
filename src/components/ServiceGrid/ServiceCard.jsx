import React from 'react';
import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';

const ServiceCardWrapper = styled.div`
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);

  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    -webkit-transform: translateY(-10px);
    -ms-transform: translateY(-10px);
    transform: translateY(-10px);
  }
`;

const ServiceTitle = styled.h3`
  color: ${themeGet('color.white', '#fff')};
`;

const ServiceCard = ({ service }) => {
  const { title, content, icon, color } = service;
  return (
    <ServiceCardWrapper
      className="rounded data-background p-4 text-center"
      data-color="#6C6CE5"
      style={{
        background: color,
        boxShadow: `0px 2px 8px rgba(0, 0, 0, 0.15)`,
      }}
    >
      <img src={icon} alt={title} />
      <ServiceTitle className="mb-2 mt-0">{title}</ServiceTitle>
      <p className="mb-0">{content}</p>
    </ServiceCardWrapper>
  );
};

export default ServiceCard;
