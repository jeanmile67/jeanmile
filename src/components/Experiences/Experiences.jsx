import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Award, Briefcase } from 'react-feather';
import PageTitle from '../PageTitle/PageTitle';
import Timeline from '../Timeline/Timeline';
import ExperiencesWrapper from './Experiences.style';

const educationData = [
  {
    id: 1,
    title: 'Master 2 professionnel Informatique TI',
    years: 'Juin 2019',
    content: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.',
    location: 'Université Claude Bernard, Lyon (France)',
    website: 'https://iutrs.unistra.fr/',
  },
  {
    id: 2,
    title: 'Licence Mathématique & Informatique',
    years: '2010 - 2012',
    content: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.',
    location: 'UFR Mathématique et Informatique, Strasbourg (France)',
    website: 'https://iutrs.unistra.fr/',
  },
  {
    id: 3,
    title: 'DUT informatique',
    years: '2006 - 2008',
    content: 'Le DUT Informatique est un diplôme universitaire national à bac+2',
    location: 'IUT Robert Schuman, Illkirch (France)',
    website: 'https://iutrs.unistra.fr/',
  },
];

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
];

const Experiences = () => (
  <ExperiencesWrapper id="experience">
    <Container>
      <PageTitle title="Experience" />
      <Row>
        <Col md={6}>
          <div className="spacer d-md-none d-lg-none" data-height="30" />
          <Timeline items={educationData} icon={<Award size={30} />} />
        </Col>

        <Col md={6}>
          <div className="spacer d-md-none d-lg-none" data-height="30" />
          <Timeline items={experienceData} icon={<Briefcase size={30} />} />
        </Col>
      </Row>
    </Container>
  </ExperiencesWrapper>
);

export default Experiences;
