import React, { useState, useEffect } from 'react';
import { Col, Container } from 'react-bootstrap';
import PageTitle from '../PageTitle/PageTitle';
import Portfolio from '../Portfolio/Portfolio';
import WorksWrapper, { PortfolioWrapper } from './Works.style';

const allData = [
  {
    id: 1,
    title: 'Inova software',
    category: 'art',
    image:
      'https://scontent-hkg4-2.xx.fbcdn.net/v/t1.0-9/10407307_564878916976193_8583747059686537882_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=UV89fbhkg0UAX-7fOVM&_nc_ht=scontent-hkg4-2.xx&oh=aa39dc1024e859aa506c7a3735541e2e&oe=602D6AF4',
    popupLink: ['https://bolby-react.vercel.app/images/works/1.svg'],
  },
  {
    id: 2,
    title: 'Guest App Walkthrough Screens',
    category: 'creative',
    image:
      'https://scontent-hkg4-1.xx.fbcdn.net/v/t1.0-9/67887097_2871052916244173_5401551300393435136_o.jpg?_nc_cat=105&ccb=2&_nc_sid=2c4854&_nc_ohc=Dvl9NQcv-4AAX-xX9mq&_nc_ht=scontent-hkg4-1.xx&oh=57c99b6fb7cbe4f64a695cde3a2892f7&oe=602FE29F',
    popupLink: [
      'https://bolby-react.vercel.app/images/works/2.svg',
      'https://bolby-react.vercel.app/images/works/5.svg',
      'https://bolby-react.vercel.app/images/works/6.svg',
    ],
  },
  {
    id: 3,
    title: 'Delivery App Wireframe',
    category: 'branding',
    image: 'https://bolby-react.vercel.app/images/works/3.svg',
    popupLink: ['https://www.youtube.com/watch?v=qf9z4ulfmYw'],
  },
  {
    id: 4,
    title: 'Onboarding Motivation',
    category: 'creative',
    image: 'https://bolby-react.vercel.app/images/works/4.svg',
    popupLink: ['https://www.youtube.com/watch?v=URVHRhBSjj8', 'https://www.youtube.com/watch?v=qf9z4ulfmYw'],
  },
  {
    id: 5,
    title: 'iMac Mockup Design',
    category: 'art',
    image: 'https://bolby-react.vercel.app/images/works/5.svg',
    popupLink: ['https://bolby-react.vercel.app/images/works/5.svg'],
  },
  {
    id: 6,
    title: 'Game Store App Concept',
    category: 'design',
    image: 'https://bolby-react.vercel.app/images/works/6.svg',
    link: 'https://dribbble.com',
  },
  {
    id: 7,
    title: 'Project Managment Illustration',
    category: 'art',
    image: 'https://bolby-react.vercel.app/images/works/3.svg',
    link: 'https://pinterest.com',
  },
  {
    id: 8,
    title: 'Guest App Walkthrough Screens',
    category: 'design',
    image: 'https://bolby-react.vercel.app/images/works/1.svg',
    popupLink: ['images/works/1.svg'],
  },
  {
    id: 9,
    title: 'Delivery App Wireframe',
    category: 'branding',
    image: 'https://bolby-react.vercel.app/images/works/4.svg',
    popupLink: ['images/works/4.svg'],
  },
  {
    id: 10,
    title: 'Game Store App Concept',
    category: 'design',
    image: 'https://bolby-react.vercel.app/images/works/6.svg',
    link: 'https://dribbble.com',
  },
  {
    id: 11,
    title: 'Project Managment Illustration',
    category: 'art',
    image: 'https://bolby-react.vercel.app/images/works/3.svg',
    link: 'https://pinterest.com',
  },
  {
    id: 12,
    title: 'Guest App Walkthrough Screens',
    category: 'design',
    image: 'https://bolby-react.vercel.app/images/works/1.svg',
    popupLink: ['images/works/1.svg'],
  },
  {
    id: 13,
    title: 'Ikos',
    category: 'branding',
    image:
      'https://www.solutionsimmobilierbysoprasteria.com/wp-content/uploads/2018/10/ikos-sopra-steria-immobilier-1.jpg',
    popupLink: ['images/works/4.svg'],
    link: 'https://www.solutionsimmobilierbysoprasteria.com/plateforme/',
  },
];

const Works = ({ items }) => {
  const [getAllItems] = useState(allData);
  const [dataVisibleCount, setDataVisibleCount] = useState(6);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    setVisibleItems(getAllItems.filter((item) => item.id <= dataVisibleCount));
  }, []);

  return (
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
};

export default Works;
