import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Briefcase } from 'react-feather';
import PageTitle from '../PageTitle/PageTitle';
import Timeline from '../Timeline/Timeline';
import ExperiencesWrapper from './Experiences.style';

const experienceData = [
  {
    id: 1,
    title: 'Analyste/Programmeur PHP',
    years: '2019 - Present',
    content: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.',
    location: 'Ecole de Management Strasbourg, Strasbourg (France)',
    website: 'https://www.em-strasbourg.eu',
    logo: 'https://pbs.twimg.com/profile_images/1132984360758599682/RqC5Nbs4.png',
  },
  {
    id: 2,
    title: 'Testeur (Assurance qualité)',
    years: '2017 - 2013',
    content: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.',
    location: 'Inova software, Lyon (France)',
    website: 'https://www.inova-software.com/best-biotech-crm',
    logo: 'https://www.inova-software.com/wp-content/uploads/2017/04/LOGO-INOVA-BLEU-2017.png',
  },
  {
    id: 3,
    title: 'DUT informatique',
    years: '2013 - 2009',
    content: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.',
    location: 'LumApps, Lyon (France)',
    website: 'https://www.lumapps.com',
    logo:
      'https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_d753e680b347a2cdeda6e8ca0c4f3342/lumapps.png',
  },
  {
    id: 4,
    title: 'Back-End Developer',
    years: '2013 - 2009',
    content: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.',
    location: 'WorldLine by Atos, Lyon (France)',
    website: 'https://worldline.com',
    logo: 'https://www.emodnet.eu/sites/emodnet.eu/files/public/partner_logo/Worldline.png',
  },
  {
    id: 5,
    title: 'Back-End Developer',
    years: '2013 - 2009',
    content: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.',
    location: 'Sopra-Steria, Lyon (France)',
    website: 'https://www.soprasteria.com',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcBNZ-7MnzVjc52n3FONklmCKnsr1Y4WYL5g&usqp=CAU',
  },
  {
    id: 6,
    title: 'Back-End Developer',
    years: '2013 - 2009',
    content: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.',
    location: 'Valraiso, Lyon (France)',
    website: 'https://www.valraiso.net',
    logo: 'https://scala.io/2017/assets/images/partners/gold/logo-valraiso.png',
  },
  {
    id: 7,
    title: 'Back-End Developer',
    years: '2013 - 2009',
    content: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.',
    location: 'Vivre Le Japon, Paris (France)',
    website: 'https://www.vivrelejapon.com',
    logo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Vivre_le_Japon_logo.png/640px-Vivre_le_Japon_logo.png',
  },
  {
    id: 8,
    title: 'Analyste/Programmeur PHP',
    years: '2013 - 2009',
    content: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.',
    location: 'Lizeo-Group, Lyon (France)',
    website: 'https://www.lizeo-group.com',
    logo: 'https://scala.io/2017/assets/images/partners/gold/logo-lizeo.png',
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
