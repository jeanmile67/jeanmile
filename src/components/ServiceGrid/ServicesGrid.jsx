import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PageTitle from '../PageTitle/PageTitle';
import ServiceCard from './ServiceCard';

const servicesData = [
  {
    id: 1,
    icon: 'https://bolby-react.vercel.app/images/service-2.svg',
    title: 'UI/UX design',
    content: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.',
    contentColor: 'light',
    color: '#1f4068',
  },
  {
    id: 2,
    icon: 'https://bolby-react.vercel.app/images/service-1.svg',
    title: 'Web Development',
    content: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.',
    color: '#e43f5a',
    contentColor: 'dark',
  },
  {
    id: 3,
    icon: 'https://bolby-react.vercel.app/images/service-3.svg',
    title: 'Photography',
    content: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.',
    color: '#162447',
    contentColor: 'light',
  },
];

const ServicesGrid = () => (
  <section id="services">
    <Container>
      <PageTitle title="Services" />
      <Row className="fix-spacing">
        {servicesData.map((service) => (
          <Col md={4} key={service.id}>
            <ServiceCard service={service} />
          </Col>
        ))}
      </Row>
      <div className="mt-5 text-center">
        <p className="mb-0">
          {`Looking for a custom job? `}
          <Link className="colorpink pointer" to="contact" spy smooth duration={500}>
            {`Click here 👋 `}
          </Link>
          to contact me!
        </p>
      </div>
    </Container>
  </section>
);

export default ServicesGrid;
