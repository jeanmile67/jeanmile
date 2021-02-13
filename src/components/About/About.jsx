import React from 'react';
import TrackVisibility from 'react-on-screen';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import { Col, Container, Row } from 'react-bootstrap';
import { Anchor, Award, Coffee, Users } from 'react-feather';
import Skill from './Skill';
import Counter from './Counter';
import PageTitle from '../PageTitle/PageTitle';
import AboutWrapper, { BubbleDialogue } from './About.style';
import { StyledLinkExt } from '../global/StyledButton';

const aboutData = {
  avatarImage: 'https://bolby-react.vercel.app/images/avatar-2.svg',
};

const progressData = [
  {
    id: 1,
    title: 'Development',
    percantage: 85,
    progressColor: '#FFD15C',
  },
  {
    id: 2,
    title: 'UI/UX Design',
    percantage: 95,
    progressColor: '#FF4C60',
  },
  {
    id: 3,
    title: 'Photography',
    percantage: 70,
    progressColor: '#6C6CE5',
  },
];

const counterData = [
  {
    id: 1,
    title: 'Projects',
    count: 198,
    icon: <Anchor size={36} />,
  },
  {
    id: 2,
    title: 'Cup of coffee',
    count: 5670,
    icon: <Coffee size={36} />,
  },
  {
    id: 3,
    title: 'Satisfied clients',
    count: 427,
    icon: <Users size={36} />,
  },
  {
    id: 4,
    title: 'Nominees winner',
    count: 35,
    icon: <Award size={36} />,
  },
];

const About = () => {
  const intl = useIntl();
  const data = useStaticQuery(graphql`
    query ProfilPictureAbout {
      file(name: { eq: "profil" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <AboutWrapper id="about">
      <Container>
        <PageTitle title={intl.formatMessage({ id: 'about.pageTitle' })} />
        <Row>
          <Col md={3}>
            <div className="text-center text-md-left">
              {/* <Img
                fixed={data.file.childImageSharp.fixed}
                objectFit="cover"
                objectPosition="50% 50%"
                alt={intl.formatMessage({ id: 'about.name' })}
              /> */}
            </div>
            <div className="spacer d-md-none d-lg-none" data-height="30" />
          </Col>

          <Col md={9}>
            <BubbleDialogue className="rounded shadow-dark padding-30">
              <Row>
                <Col md={6}>
                  <p>
                    <FormattedMessage id="about.content" />
                  </p>
                  <div className="mt-3">
                    <StyledLinkExt href="https://www.w3schools.com/tags/att_a_download.asp" msg="Download CV" />
                  </div>
                  <div className="spacer d-md-none d-lg-none" data-height="30" />
                </Col>
                <Col md={6}>
                  {progressData.map((progress) => (
                    <TrackVisibility once key={progress.id} className="progress-wrapper">
                      <Skill progress={progress} />
                    </TrackVisibility>
                  ))}
                </Col>
              </Row>
            </BubbleDialogue>
          </Col>
        </Row>

        <div className="spacer" data-height="70" />
        <Row className="fix-spacing">
          {counterData.map((counter) => (
            <Col key={counter.id} md={3} sm={6}>
              <TrackVisibility once>
                <Counter counterItem={counter} />
              </TrackVisibility>
            </Col>
          ))}
        </Row>
      </Container>
    </AboutWrapper>
  );
};

export default About;
