import React, { useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Col, Container, Row, Form } from 'react-bootstrap';
import StyledButton from '../global/StyledButton';
import PageTitle from '../PageTitle/PageTitle';
import ContactMeInfo, { ContactMeForm } from './ContactMe.style';

const ContactMe = () => {
  const [formdata, setFormdata] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    if (!formdata.name) {
      setError(true);
      setMessage('Name is required');
    } else if (!formdata.email) {
      setError(true);
      setMessage('Email is required');
    } else if (!formdata.subject) {
      setError(true);
      setMessage('Subject is required');
    } else if (!formdata.message) {
      setError(true);
      setMessage('Message is required');
    } else {
      setError(false);
      setMessage('You message has been sent!!!');
    }
  };

  const handleChange = (event) => {
    setFormdata({
      ...formdata,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleAlerts = () => {
    if (error && message) {
      return <div className="alert alert-danger mt-4">{message}</div>;
    }
    if (!error && message) {
      return <div className="alert alert-success mt-4">{message}</div>;
    }
    return null;
  };

  return (
    <section id="contact">
      <Container>
        <PageTitle title="Get in Touch" />
        <Row>
          <Col md={4}>
            <ContactMeInfo>
              <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" animateOnce>
                <h3>Let's talk about everything!</h3>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" animateOnce>
                <p>
                  Don't like forms? Send me an
                  <a href="mailto:name@example.com">email</a>. 👋
                </p>
              </ScrollAnimation>
            </ContactMeInfo>
          </Col>

          <Col md={8}>
            {/* <ContactMeForm id="contact-form" className="mt-6" onSubmit={submitHandler}>
              <Row>
                <Col md={6}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="InputName"
                      placeholder="Your name"
                      onChange={handleChange}
                      value={formdata.name}
                    />
                  </div>
                </Col>

                <Col md={6}>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="InputEmail"
                      name="email"
                      placeholder="Email address"
                      onChange={handleChange}
                      value={formdata.email}
                    />
                  </div>
                </Col>

                <Col md={12}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="InputSubject"
                      name="subject"
                      placeholder="Subject"
                      onChange={handleChange}
                      value={formdata.subject}
                    />
                  </div>
                </Col>

                <Col md={12}>
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="InputMessage"
                      className="form-control"
                      rows="5"
                      placeholder="Message"
                      onChange={handleChange}
                      value={formdata.message}
                    />
                  </div>
                </Col>
              </Row>
              <button type="submit" name="submit" id="submit" value="Submit" className="btn btn-default">
                Send Message
              </button>
            </ContactMeForm> */}
            <ContactMeForm>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="Name" placeholder="John Doe" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="john.doe@gmail.com" />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="subject">
                <Form.Label>Subject</Form.Label>
                <Form.Control placeholder="Subject of your message" />
              </Form.Group>

              <Form.Group controlId="formGridAddress1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" placeholder="You are awesome" rows={5} />
              </Form.Group>

              <StyledButton msg="Send Message" />
              {handleAlerts()}
            </ContactMeForm>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactMe;
