import { themeGet } from '@styled-system/theme-get';
import React from 'react';
import CountUp from 'react-countup';
import styled from 'styled-components';

const FactItem = styled.div`
  color: ${themeGet('color.white', '#fff')};

  .details {
    margin-left: 60px;
  }

  svg {
    color: #dedeea;
    float: left;
  }

  .number {
    font-size: 30px;

    em {
      font-style: normal;
    }
  }

  p {
    font-size: 16px;
  }
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
        <h3 className="mb-0 mt-0 number">
          <em className="count">{countQuery()}</em>
        </h3>
        <p className="mb-0">{title}</p>
      </div>
    </FactItem>
  );
};

export default Counter;
