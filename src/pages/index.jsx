import React, { useState } from 'react';
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
    portfolioData: allPortfolioJson {
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
    technoData: allTechnoJson {
      nodes {
        id
        name
        image {
          publicURL
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  const servicesData = data.servicesData.nodes;
  const portfolioItems = data.portfolioData.nodes;
  const technoItems = data.technoData.nodes;

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
          <Hero />
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
            <Technology items={technoItems} />
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
