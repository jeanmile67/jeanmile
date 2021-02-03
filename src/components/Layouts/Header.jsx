import React from 'react';
import { Link } from 'react-scroll';
import { Col, Container, Row } from 'react-bootstrap';
import { Award, Briefcase, Heart, Home, Layers, MessageCircle, UserCheck } from 'react-feather';
import HeaderWrapper, { MenuIcon, LogoCenter, MobileHeaderWrapper } from './Header.style';
import Logo from '../global/Logo';
import LangPicker from '../LangPicker/LangPicker';

const Header = ({ light, logoSource, toggleMenu, headerToggler }) => {
  const handleClasses = () => {
    let classes = 'desktop-header-1 d-flex align-items-start flex-column';
    if (light & toggleMenu) {
      classes += ' light open';
    } else if (toggleMenu) {
      classes += ' open';
    } else if (light) {
      classes += ' light';
    }
    return classes;
  };
  const handleMobileClasses = () => {
    let classes = 'mobile-header-2';
    if (light & toggleMenu) {
      classes += ' light open';
    } else if (toggleMenu) {
      classes += ' open';
    } else if (light) {
      classes += ' light';
    }
    return classes;
  };

  return (
    <>
      <MobileHeaderWrapper className={handleMobileClasses()}>
        <Container fluid>
          <Row>
            <Col className="align-middle">
              <MenuIcon onClick={headerToggler} size={40} />
              <div className="navbar-brand">
                <Logo />
              </div>
            </Col>
          </Row>
        </Container>
      </MobileHeaderWrapper>
      <HeaderWrapper className={handleClasses()}>
        <LogoCenter>
          <Logo />
        </LogoCenter>
        <nav>
          <ul className="vertical-menu scrollspy">
            <li>
              <Link activeClass="active" to="home" spy smooth duration={500}>
                <Home />
                Home
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="about" spy smooth duration={500}>
                <UserCheck />
                About
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="services" spy smooth duration={500}>
                <Briefcase />
                Services
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="experiences" spy smooth duration={500}>
                <Award />
                Experience
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="works" spy smooth duration={500}>
                <Layers />
                Works
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="contact" spy smooth duration={500}>
                <MessageCircle />
                Contact
              </Link>
            </li>
            <li>
              <LangPicker />
            </li>
          </ul>
        </nav>

        <div className="footer">
          <span className="copyright">
            Made with
            <Heart />
          </span>
        </div>
      </HeaderWrapper>
    </>
  );
};

export default Header;
