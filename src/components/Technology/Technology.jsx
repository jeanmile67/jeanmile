import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PageTitle from '../PageTitle/PageTitle';
import TechnologyWrapper, { LogoGrid } from './Technology.style';

const brandlogoData = [
  {
    id: 1,
    image: 'https://bolby-react.vercel.app/images/client-1-light.svg',
  },
  {
    id: 2,
    image: 'https://bolby-react.vercel.app/images/client-2-light.svg',
  },
  {
    id: 3,
    image: 'https://bolby-react.vercel.app/images/client-3-light.svg',
  },
  {
    id: 4,
    image: 'https://bolby-react.vercel.app/images/client-4-light.svg',
  },
  {
    id: 5,
    image: 'https://bolby-react.vercel.app/images/client-5-light.svg',
  },
  {
    id: 6,
    image: 'https://bolby-react.vercel.app/images/client-6-light.svg',
  },
  {
    id: 7,
    image: 'https://bolby-react.vercel.app/images/client-7-light.svg',
  },
  {
    id: 8,
    image: 'https://bolby-react.vercel.app/images/client-8-light.svg',
  },
];

const Technology = () => (
  <TechnologyWrapper id="about">
    <Container>
      <PageTitle title="Technology" />
      <Row>
        {brandlogoData.map((brandlogo) => (
          <Col md={3} col={6} key={brandlogo.id}>
            <LogoGrid>
              <div className="inner">
                <img src={brandlogo.image} alt="client-name" />
              </div>
            </LogoGrid>
          </Col>
        ))}
      </Row>
    </Container>
  </TechnologyWrapper>
);

export default Technology;
