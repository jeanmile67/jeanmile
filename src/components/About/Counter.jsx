import { themeGet } from '@styled-system/theme-get';
import React from 'react';
import CountUp from 'react-countup';
import styled from 'styled-components';

const FactItem = styled.div`
  display: flex;
  align-items: center;

  color: ${themeGet('color.white', '#fff')};

  svg {
    margin-right: 20px;
    color: ${themeGet('color.white', '#fff')};
  }
`;

const Number = styled.h3`
  font-size: 30px;
`;

const Counter = ({ counterItem, isVisible }) => {
  const { title, count, icon } = counterItem;
  const winWidth = window.innerWidth;
  const countQuery = () => {
    if (winWidth && winWidth > 767) {
      return <CountUp end={isVisible ? count : 0} />;
    }
    return <CountUp end={count} />;
  };

  return (
    <FactItem>
      {icon}
      <div className="details">
        <Number className="mb-0 mt-0 number">{countQuery()}</Number>
        <p className="mb-0">{title}</p>
      </div>
    </FactItem>
  );
};

export default Counter;
