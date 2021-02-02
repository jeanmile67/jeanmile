import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { Row } from 'react-bootstrap';

const WorksWrapper = styled.section``;

export const PortfolioWrapper = styled(Row)`
  [class*='col-'] {
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;

export default WorksWrapper;
