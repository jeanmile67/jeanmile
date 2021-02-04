import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PageTitle from '../PageTitle/PageTitle';
import TechnologyWrapper, { LogoGrid } from './Technology.style';

const logoTechnoData = [
  {
    id: 1,
    name: 'scala',
    image: 'https://www.vectorlogo.zone/logos/scala-lang/scala-lang-ar21.svg',
  },
  {
    id: 2,
    name: 'reactjs',
    image: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg',
  },
  {
    id: 3,
    name: 'java',
    image: 'https://www.vectorlogo.zone/logos/java/java-horizontal.svg',
  },
  {
    id: 4,
    name: 'git',
    image: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21.svg',
  },
  {
    id: 5,
    name: 'mongodb',
    image: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg',
  },
  {
    id: 6,
    name: 'apache kafka',
    image: 'https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-ar21.svg',
  },
  {
    id: 7,
    name: 'gatsby',
    image: 'https://www.vectorlogo.zone/logos/gatsbyjs/gatsbyjs-ar21.svg',
  },
  {
    id: 8,
    name: 'rasberryPi',
    image: 'https://www.vectorlogo.zone/logos/raspberrypi/raspberrypi-ar21.svg',
  },
];

const Technology = () => (
  <TechnologyWrapper id="about">
    <Container>
      <PageTitle title="Technology" />
      <Row>
        {logoTechnoData.map((logoTechno) => (
          <Col md={3} col={6} key={logoTechno.id}>
            <LogoGrid>
              <div className="inner">
                <img src={logoTechno.image} alt={logoTechno.name} />
              </div>
            </LogoGrid>
          </Col>
        ))}
      </Row>
    </Container>
  </TechnologyWrapper>
);

export default Technology;
