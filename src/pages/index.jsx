import React, { useState } from 'react';
import ReactCursorPosition from 'react-cursor-position';
import { Element } from 'react-scroll';
import { graphql } from 'gatsby';
import About from '../components/About/About';
import Header from '../components/Layouts/Header';
import Layout from '../components/Layouts/Layout';
import Experiences from '../components/Experiences/Experiences';
import Education from '../components/Education/Education';
import Hero from '../components/Hero/Hero';
import ServicesGrid from '../components/ServiceGrid/ServicesGrid';
import PageMetadata from '../components/global/PageMetaData';
import ContactMe from '../components/ContactMe/ContactMe';
import Works from '../components/Works/Works';
import Technology from '../components/Technology/Technology';

export const homeQuery = graphql`
  query HomePageQuery {
    servicesData: allServiceJson {
      nodes {
        id
        title
        content
        color
        theme
        image {
          childImageSharp {
            fluid(maxWidth: 125) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    portfolio: allPortfolioJson {
      nodes {
        id
        title
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    technos: all
  }
`;

const IndexPage = ({ data }) => {
  const servicesData = data.servicesData.nodes;
  const portfolioItems = data.portfolio.nodes;
  const [toggleMenu, setToggleMenu] = useState(false);
  const headerToggler = (e) => {
    e.preventDefault();
    setToggleMenu(!toggleMenu);
  };

  return (
    <>
      <PageMetadata />
      <Layout>
        <Header toggleMenu={toggleMenu} headerToggler={headerToggler} />
        <main className={toggleMenu ? 'content open' : 'content'}>
          <ReactCursorPosition>
            <Hero />
          </ReactCursorPosition>
          <Element name="about">
            <About />
          </Element>
          <Element name="service">
            <ServicesGrid servicesData={servicesData} />
          </Element>
          <Element name="experiences">
            <Experiences />
          </Element>
          <Element name="education">
            <Education />
          </Element>
          <Element name="works">
            <Works items={portfolioItems} />
          </Element>
          <Element name="technology">
            <Technology />
          </Element>
          <Element name="contact">
            <ContactMe />
          </Element>
        </main>
      </Layout>
    </>
  );
};

export default IndexPage;
