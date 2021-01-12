import React from 'react';
import { themeGet } from '@styled-system/theme-get';
import { useSpring, animated } from 'react-spring';
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

const Number = styled(animated.h3)`
  font-size: 30px;
`;

const Counter = ({ counterItem, isVisible }) => {
  const { title, count, icon } = counterItem;

  const countSpring = useSpring({
    config: { duration: 3000 },
    number: count,
    from: { number: 0 },
  });

  return (
    <FactItem>
      {icon}
      <div className="details">
        <Number className="mb-0 mt-0">{isVisible ? countSpring.number.interpolate((x) => x.toFixed(0)) : 0}</Number>
        <p className="mb-0">{title}</p>
      </div>
    </FactItem>
  );
};

export default Counter;
