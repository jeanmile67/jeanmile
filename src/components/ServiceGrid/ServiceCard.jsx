import { themeGet } from '@styled-system/theme-get';
import React from 'react';
import styled from 'styled-components';

const ServiceCardWrapper = styled.div``;

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
