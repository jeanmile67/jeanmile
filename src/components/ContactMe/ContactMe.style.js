import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { Form } from 'react-bootstrap';

const ContactMeInfo = styled.div`
  color: ${themeGet('color.white', '#fff')};
  background-image: url('https://bolby-react.vercel.app/images/map-light.png');
  background-repeat: no-repeat;
  background-size: contain;
  min-height: 200px;

  h3 {
    font-size: 23px;
    margin: 0 0 10px;
  }
`;

export const ContactMeForm = styled(Form)`
  .form-label {
    color: ${themeGet('color.white', '#fff')};
    font-weight: 600;
  }

  .form-control {
    display: block;
    border-radius: 15px;
    width: 100%;
    height: 50px;
    padding: 10px 30px;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.6;
    color: ${themeGet('color.default', '#aeacca')};
    background-color: ${themeGet('color.white', '#fff')};
    background-image: none;
    border: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
    @extend .shadow-dark;
  }

  #formGridAddress1 {
    height: auto;
  }

  .form-control:focus {
    @extend .shadow-dark;
    outline: 0;
  }

  .form-control::-webkit-input-placeholder {
    /* Edge */
    color: #aeacca;
  }

  .form-control:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #aeacca;
  }

  .form-control::placeholder {
    color: #aeacca;
  }

  .form-group {
    margin-bottom: 15px;
  }
`;

export default ContactMeInfo;
