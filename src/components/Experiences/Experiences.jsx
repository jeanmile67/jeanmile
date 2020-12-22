import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import PageTitle from '../PageTitle/PageTitle';
import ExperiencesWrapper, { TimelineWrapper } from './Experiences.style';
import Timeline from './Timeline';

const educationData = [
  {
    id: 1,
    title: 'Acamedic Degree',
    years: '2019 - Present',
    content: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.',
  },
  {
    id: 2,
    title: 'Bachelor’s Degree',
    years: '2017 - 2013',
    content: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.',
  },
  {
    id: 3,
    title: 'Honours Degree',
    years: '2013 - 2009',
    content: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.',
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
          <TimelineWrapper className=" edu bg-white rounded shadow-dark padding-30 overflow-hidden">
            {educationData.map((education) => (
              <Timeline key={education.id} education={education} />
            ))}
            <span className="line" />
          </TimelineWrapper>
        </Col>

        <Col md={6}>
          <div className="spacer d-md-none d-lg-none" data-height="30" />
          <TimelineWrapper className=" exp bg-white rounded shadow-dark padding-30 overflow-hidden">
            {experienceData.map((experience) => (
              <Timeline key={experience.id} education={experience} />
            ))}
            <span className="line" />
          </TimelineWrapper>
        </Col>
      </Row>
    </Container>
  </ExperiencesWrapper>
);

export default Experiences;
