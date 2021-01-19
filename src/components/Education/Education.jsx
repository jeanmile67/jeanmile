import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Award } from 'react-feather';
import PageTitle from '../PageTitle/PageTitle';
import Timeline from '../Timeline/Timeline';
import EducationWrapper from './Education';

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

const Education = () => (
  <EducationWrapper id="education">
    <Container>
      <PageTitle title="Education" />
      <Row>
        <Col md={12}>
          <div className="spacer d-md-none d-lg-none" data-height="30" />
          <Timeline items={educationData} icon={<Award size={30} />} />
        </Col>
      </Row>
    </Container>
  </EducationWrapper>
);

export default Education;
