import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PageTitle from '../PageTitle/PageTitle';
import TechnologyWrapper, { LogoGrid } from './Technology.style';

const Technology = ({ technos }) => (
  <TechnologyWrapper id="about">
    <Container>
      <PageTitle title="Technologies" />
      <Row>
        {technos.map((techno) => (
          <Col md={3} col={6} key={techno.id}>
            <LogoGrid>
              <div className="inner">
                <img src={techno.image} alt={techno.name} />
              </div>
            </LogoGrid>
          </Col>
        ))}
      </Row>
    </Container>
  </TechnologyWrapper>
);

export default Technology;
