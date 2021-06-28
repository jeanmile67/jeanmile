import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Col, Container, Row } from 'react-bootstrap';
import PageTitle from '../PageTitle/PageTitle';
import ContactForm from './ContactForm';
import ContactMeInfo from './ContactMe.style';

const ContactMe = () => (
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
                <a href="mailto:conta@example.com">email</a>. 👋
              </p>
            </ScrollAnimation>
          </ContactMeInfo>
        </Col>

        {/* Contact form */}
        <Col md={8}>
          <ContactForm />
        </Col>
      </Row>
    </Container>
  </section>
);

export default ContactMe;
