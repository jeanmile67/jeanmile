import React from 'react';
import { Link } from 'react-scroll';
import { Award, Briefcase, Edit, Heart, Home, Layers, MessageCircle, UserCheck } from 'react-feather';
import HeaderWrapper, { MobileHeaderWrapper } from './Header.style';
import Logo from '../global/Logo';
import LangPicker from '../LangPicker/LangPicker';
import { Container } from 'react-bootstrap';

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
        <Container>
          <div className="menu-icon d-inline-flex mr-4">
            <button onClick={headerToggler}>
              <span />
            </button>
          </div>
          <Logo logoSource={logoSource} />
        </Container>
      </MobileHeaderWrapper>
      <HeaderWrapper className={handleClasses()}>
        <Logo logoSource={logoSource} />
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
