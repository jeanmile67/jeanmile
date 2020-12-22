import React from 'react';
import { Link } from 'react-scroll';
import PageTitle from '../PageTitle/PageTitle';
import ServiceCard from './ServiceCard';

const servicesData = [
  {
    id: 1,
    icon: 'https://bolby-react.vercel.app/images/service-1.svg',
    title: 'UI/UX design',
    content: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.',
    color: '#6C6CE5',
    contentColor: 'light',
  },
  {
    id: 2,
    icon: 'https://bolby-react.vercel.app/images/service-2.svg',
    title: 'Web Development',
    content: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.',
    color: '#F9D74C',
    contentColor: 'dark',
  },
  {
    id: 3,
    icon: 'https://bolby-react.vercel.app/images/service-3.svg',
    title: 'Photography',
    content: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.',
    color: '#F97B8B',
    contentColor: 'light',
  },
];

const ServicesGrid = () => (
  <section id="services">
    <div className="container">
      <PageTitle title="Services" />
      <div className="row fix-spacing">
        {servicesData.map((service) => (
          <div className="col-md-4" key={service.id}>
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
      <div className="mt-5 text-center">
        <p className="mb-0">
          Looking for a custom job?{' '}
          <Link className="colorpink pointer" to="section-contact" spy smooth duration={500}>
            Click here
          </Link>{' '}
          to contact me! 👋
        </p>
      </div>
    </div>
  </section>
);

export default ServicesGrid;
