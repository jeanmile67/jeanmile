import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Award } from 'react-feather';
import PageTitle from '../PageTitle/PageTitle';
import Timeline from '../Timeline/Timeline';
import EducationWrapper from './Education.style';

const educationData = [
  {
    id: 1,
    title: 'DUT informatique',
    years: '2006 - 2008',
    content: 'Le DUT Informatique est un diplôme universitaire national à bac+2',
    location: 'IUT Robert Schuman, Illkirch (France)',
    website: 'https://iutrs.unistra.fr/',
    logo:
      'https://nl.4d.com/sites/default/files/styles/320x236/public/references/logos/iut-robert-schuman.png?itok=pTVU7XWv',
  },
  {
    id: 2,
    title: 'Licence Mathématique & Informatique',
    years: '2010 - 2012',
    content: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.',
    location: 'UFR Mathématique et Informatique, Strasbourg (France)',
    website: 'https://iutrs.unistra.fr/',
    logo:
      'https://png2.cleanpng.com/sh/c68e6423885b8a2a7e9f78776af5e322/L0KzQYm3WMA3N6Nmi5H0aYP2gLBuTgVvcadqiuVydImwf7e0kCRzaaRnhAd7Zz32hMPokBJwfaNsRed3aYbogsTwlQkudV5rgd5uLXzyd7E0lfR0NaV3edD8cHH1dbB7TgBvb158gd1ybXXnebK0gB9udZDzi58AYka7SLa3VMEyOpc5S5CDOEi8SYm8WME2O2Q6T6oCNUazR4G7TwBvbz==/kisspng-university-of-strasbourg-strasbourg-university-m-file-logo-uds-transparent-png-wikimedia-commons-5b688e04112f43.8889985815335787560704.png',
  },
  {
    id: 3,
    title: 'Master 2 professionnel Informatique TI',
    years: 'Juin 2019',
    content: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.',
    location: 'Université Claude Bernard, Lyon (France)',
    website: 'https://iutrs.unistra.fr/',
    logo:
      'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Claude_Bernard_University_Lyon_1_%28logo%29.svg/1200px-Claude_Bernard_University_Lyon_1_%28logo%29.svg.png',
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
