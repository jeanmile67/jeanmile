import React from 'react';
import { Col, Container } from 'react-bootstrap';
import PageTitle from '../PageTitle/PageTitle';
import Portfolio from '../Portfolio/Portfolio';
import WorksWrapper, { PortfolioWrapper } from './Works.style';

const Works = ({ items }) => (
  <WorksWrapper id="works">
    <Container>
      <PageTitle title="Works" />
      <PortfolioWrapper className="row portfolio-wrapper">
        {items.map((item) => (
          <Col md={4} sm={6} className="grid-item" key={item.id}>
            <Portfolio portfolio={item} />
          </Col>
        ))}
      </PortfolioWrapper>
    </Container>
  </WorksWrapper>
);

export default Works;
