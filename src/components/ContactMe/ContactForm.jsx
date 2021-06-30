/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import { Col, Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const ContactFormWrapper = styled(Form)`
  .form-label {
    color: ${themeGet('color.white', '#fff')};
    font-weight: 600;
  }

  .form-control {
    display: block;
    border-radius: 10px;
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

  #formMessage {
    height: auto;
  }

  .form-control:focus {
    box-shadow: 0 0 0 3px ${themeGet('color.pink', '#fff')};
  }

  .form-control::placeholder {
    color: #aeacca;
  }

  .form-group {
    margin-bottom: 15px;
  }
`;

const ContactForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(data)).toString(),
    })
      .then(() => console.log('Form successfully submitted'))
      .catch((error) => alert(error));
  };

  return (
    <ContactFormWrapper onSubmit={handleSubmit(onSubmit)} data-netlify="true">
      <Form.Row>
        <Form.Group as={Col} controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="John Doe" {...register('name', { required: true })} />
        </Form.Group>

        <Form.Group as={Col} controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            name="email"
            placeholder="john.doe@gmail.com"
            {...register('email', { required: true })}
          />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formsubject">
        <Form.Label>Subject</Form.Label>
        <Form.Control
          type="text"
          name="subject"
          placeholder="Subject of your message"
          {...register('subject', { required: true })}
        />
      </Form.Group>

      <Form.Group controlId="formMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          type="text"
          name="message"
          placeholder="You are awesome"
          rows={5}
          {...register('message', { required: true })}
        />
      </Form.Group>

      <Button type="submit">Submit</Button>
    </ContactFormWrapper>
  );
};

export default ContactForm;
