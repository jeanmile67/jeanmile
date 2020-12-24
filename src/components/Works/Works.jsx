import React, { useState, useEffect } from 'react';
import PageTitle from '../PageTitle/PageTitle';
import Portfolio from '../Portfolio/Portfolio';
import WorksWrapper, { PortfolioWrapper } from './Works.style';

const allData = [
  {
    id: 1,
    title: 'Project Managment Illustration',
    category: 'art',
    image: 'https://bolby-react.vercel.app/images/works/1.svg',
    popupLink: ['https://bolby-react.vercel.app/images/works/1.svg'],
  },
  {
    id: 2,
    title: 'Guest App Walkthrough Screens',
    category: 'creative',
    image: 'https://bolby-react.vercel.app/images/works/2.svg',
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
    title: 'Delivery App Wireframe',
    category: 'branding',
    image: 'https://bolby-react.vercel.app/images/works/4.svg',
    popupLink: ['images/works/4.svg'],
  },
];

const Works = () => {
  const [getAllItems] = useState(allData);
  const [dataVisibleCount, setDataVisibleCount] = useState(6);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    setVisibleItems(getAllItems.filter((item) => item.id <= dataVisibleCount));
  }, []);

  return (
    <WorksWrapper id="works">
      <div className="container">
        <PageTitle title="Works" />
        {/* <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" animateOnce={true}> */}
        {/* <ul className="portfolio-filter list-inline">
        {filters.map((filter) => (
          <li className="list-inline-item" key={filter.id}>
            <button
              onClick={handleChange}
              className={filter.text.toLowerCase() === activeFilter ? 'text-capitalize current' : 'text-capitalize'}
            >
              {filter.text}
            </button>
          </li>
        ))}
      </ul> */}
        {/* </ScrollAnimation> */}
        {/* End Portfolio Filters */}

        {/* Start Portfolio Items */}
        <PortfolioWrapper className="row portfolio-wrapper">
          {visibleItems.map((item) => (
            <div className="col-md-4 col-sm-6 grid-item" key={item.id}>
              <Portfolio portfolio={item} />
            </div>
          ))}
        </PortfolioWrapper>
        {/* End Portfolio Items */}

        {/* <div className="load-more text-center mt-4">
        <button className="btn btn-default" onClick={handleLoadmore} disabled={noMorePost ? 'disabled' : null}>
          {noMorePost ? (
            'No more items'
          ) : (
            <span>
              <i className="fas fa-spinner"></i> Load more
            </span>
          )}
        </button>
      </div> */}
      </div>
    </WorksWrapper>
  );
};

export default Works;
