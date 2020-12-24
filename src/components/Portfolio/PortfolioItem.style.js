import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const PortfolioButton = styled.span`
  display: block;
  background: ${themeGet('color.yellow', '#FF4C60')};
  border-radius: 100%;
  height: 40px;
  line-height: 36px;
  text-align: center;
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: 40px;
  opacity: 0;
  @include transition(0.3s);
`;

export const PortfolioDetails = styled.div`
  color: ${themeGet('color.white', '#fff')};
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 1;
`;

export const PortfolioMask = styled.div`
  background: ${themeGet('color.blue', '#FF4C60')};
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  height: 100%;
  width: 100%;
  @include transition(0.3s);
`;

const PortfolioItemWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 20px;

  &:hover {
    ${PortfolioMask} {
      opacity: 0.9;
    }

    ${PortfolioDetails} {
      h4,
      span {
        opacity: 1;
        transform: translateY(0);
      }

      ${PortfolioButton} {
        opacity: 1;
      }
    }
  }
`;

export const PortfolioThumb = styled.div`
  overflow: hidden;
  img {
    margin-bottom: 0px;
  }
`;

export const PortfolioCategory = styled.span`
  color: ${themeGet('color.white', '#fff')};
  background: ${themeGet('color.pink', '#FF4C60')};
  text-transform: capitalize;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  font-size: 15px;
  opacity: 0;
  display: inline-block;
  padding: 3px 10px;
  position: absolute;
  top: 0;
  left: 20px;
  transform: translateY(-40px);
  transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 1s;
`;

export const PortfolioTitle = styled.h4`
  color: ${themeGet('color.white', '#fff')};
  text-transform: capitalize;
  font-size: 20px;
  margin: 0 0 10px;
  padding: 0 20px;
  opacity: 0;
  transform: translateY(30px);
  transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 1s;
  position: absolute;
  top: 60px;
`;

export default PortfolioItemWrapper;
