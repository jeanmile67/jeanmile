import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Briefcase } from 'react-feather';
import PageTitle from '../PageTitle/PageTitle';
import Timeline from '../Timeline/Timeline';
import ExperiencesWrapper from './Experiences.style';

const experienceData = [
  {
    id: 1,
    title: 'Web Designer',
    years: '2019 - Present',
    content: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.',
  },
  {
    id: 2,
    title: 'Front-End Developer',
    years: '2017 - 2013',
    content: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.',
  },
  {
    id: 3,
    title: 'Back-End Developer',
    years: '2013 - 2009',
    content: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.',
  },
  {
    id: 4,
    title: 'Back-End Developer',
    years: '2013 - 2009',
    content: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.',
  },
  {
    id: 5,
    title: 'Back-End Developer',
    years: '2013 - 2009',
    content: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.',
  },
  {
    id: 6,
    title: 'Back-End Developer',
    years: '2013 - 2009',
    content: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.',
  },
  {
    id: 7,
    title: 'Back-End Developer',
    years: '2013 - 2009',
    content: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.',
  },
];

const Experiences = () => (
  <ExperiencesWrapper id="experiences">
    <Container>
      <PageTitle title="Experiences" />
      <Row>
        <Col md={12}>
          <div className="spacer d-md-none d-lg-none" data-height="30" />
          <Timeline items={experienceData} icon={<Briefcase size={30} />} />
        </Col>
      </Row>
    </Container>
  </ExperiencesWrapper>
);

export default Experiences;
