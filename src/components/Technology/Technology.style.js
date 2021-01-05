import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const TechnologyWrapper = styled.section``;

export const LogoGrid = styled.div`
  min-height: 50px;
  position: relative;
  text-align: center;
  margin-top: 60px;

  .inner {
    text-align: center;
    position: absolute;
    left: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 100%;
  }

  img {
    display: inline-block;
  }
`;

export default TechnologyWrapper;
