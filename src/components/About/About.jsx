import React from 'react';
import TrackVisibility from 'react-on-screen';
import { Col, Container, Row } from 'react-bootstrap';
import { Anchor, Award, Coffee, Users } from 'react-feather';
import Skill from './Skill';
import Counter from './Counter';
import PageTitle from '../PageTitle/PageTitle';
import AboutWrapper, { BubbleDialogue } from './About.style';
import StyledButton from '../global/StyledButton';

const aboutContent = {
  name: 'Bolby',
  avatarImage: 'https://bolby-react.vercel.app/images/avatar-2.svg',
  content:
    'I am Bolby Doe, web developer from London, United Kingdom. I have rich experience in web site design and building and customization, also I am good at WordPress.',
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

const About = () => (
  <AboutWrapper id="about">
    <Container>
      <PageTitle title="About Me" />
      <Row>
        <Col md={3}>
          <div className="text-center text-md-left">
            <img src={aboutContent.avatarImage} alt={aboutContent.name} />
          </div>
          <div className="spacer d-md-none d-lg-none" data-height="30" />
        </Col>

        <Col md={9}>
          <BubbleDialogue className="rounded shadow-dark padding-30">
            <Row>
              <Col md={6}>
                <p>{aboutContent.content}</p>
                <div className="mt-3">
                  <StyledButton msg="Download CV" />
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

export default About;
