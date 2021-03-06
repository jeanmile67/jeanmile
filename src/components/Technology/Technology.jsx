import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PageTitle from '../PageTitle/PageTitle';
import TechnologyWrapper, { LogoGrid } from './Technology.style';

const Technology = ({ items }) => (
  <TechnologyWrapper id="about">
    <Container>
      <PageTitle title="Technologies" />
      <Row>
        {items.map((techno) => (
          <Col md={3} col={6} key={techno.id}>
            <LogoGrid>
              <img src={techno.image.publicURL} alt={techno.name} />
            </LogoGrid>
          </Col>
        ))}
      </Row>
    </Container>
  </TechnologyWrapper>
);

export default Technology;
