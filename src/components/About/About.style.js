import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const AboutWrapper = styled.section``;

export const BubbleDialogue = styled.div`
  color: white;
  background-color: #302f4e !important;
  padding: 30px;
  box-shadow: 0 5px 20px 0 rgba(69, 67, 96, 0.1);

  &:before {
    content: '';
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 15px solid #fff;
    position: absolute;
    left: 0;
    top: 20%;
    border-right-color: #302f4e;
  }

  .progress-wrapper:not(:first-child) {
    margin-top: 20px;
  }
`;

export default AboutWrapper;
