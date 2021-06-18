import React from 'react';
import TrackVisibility from 'react-on-screen';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import { Col, Container, Row } from 'react-bootstrap';
import { Anchor, Award, Coffee, Users } from 'react-feather';
import _ from 'lodash';
import Skill from './Skill';
import Counter from './Counter';
import PageTitle from '../PageTitle/PageTitle';
import AboutWrapper, { BubbleDialogue } from './About.style';
import { StyledLinkExt } from '../global/StyledButton';
import ProfilImg from '../global/ProfilImg';
import myCVDownloadFile from '../../static/CV_jeanmile-EN.pdf';

const progressData = [
  {
    title: 'Scala development',
    percantage: 85,
    progressColor: '#FFD15C',
  },
  {
    title: 'UI/UX Design',
    percantage: 95,
    progressColor: '#FF4C60',
  },
  {
    title: 'Photography',
    percantage: 70,
    progressColor: '#6C6CE5',
  },
];

const counterData = [
  {
    title: 'Projects',
    count: 198,
    icon: <Anchor size={36} />,
  },
  {
    title: 'Cup of coffee',
    count: 5670,
    icon: <Coffee size={36} />,
  },
  {
    title: 'Satisfied clients',
    count: 427,
    icon: <Users size={36} />,
  },
  {
    title: 'Nominees winner',
    count: 35,
    icon: <Award size={36} />,
  },
];

const About = () => {
  const intl = useIntl();

  return (
    <AboutWrapper id="about">
      <Container>
        <PageTitle title={intl.formatMessage({ id: 'about.pageTitle' })} />
        <Row>
          <Col md={3}>
            <div className="text-right">
              <ProfilImg maxWidth={150} maxHeight={150} />
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
                    <StyledLinkExt href={myCVDownloadFile} msg="Download CV" />
                  </div>
                  <div className="spacer d-md-none d-lg-none" data-height="30" />
                </Col>
                <Col md={6}>
                  {progressData.map((progress) => (
                    <TrackVisibility once key={_.uniqueId} className="progress-wrapper">
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
            <Col key={_.uniqueId} md={3} sm={6}>
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
