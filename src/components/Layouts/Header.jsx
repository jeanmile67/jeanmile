import React from 'react';
import { Link } from 'react-scroll';
import { Award, Briefcase, Edit, Home, Layers, MessageCircle, UserCheck } from 'react-feather';
import HeaderWrapper from './Header.style';
import Logo from '../global/Logo';

const Header = ({ light, logoSource, toggleMenu, headerToggler }) => {
  const handleClasses = () => {
    let classes = 'desktop-header-2 d-flex align-items-start flex-column';
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
      <HeaderWrapper className={handleClasses()}>
        <Logo logoSource={logoSource} />
        <nav>
          <ul className="vertical-menu scrollspy">
            <li>
              <Link activeClass="active" to="section-home" spy={true} smooth={true} duration={500}>
                <Home /> Home
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="section-about" spy={true} smooth={true} duration={500}>
                <UserCheck /> About
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="section-services" spy={true} smooth={true} duration={500}>
                <Briefcase /> Services
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="section-experiences" spy={true} smooth={true} duration={500}>
                <Award /> Experience
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="section-works" spy={true} smooth={true} duration={500}>
                <Layers /> Works
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="section-blogs" spy={true} smooth={true} duration={500}>
                <Edit />
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="section-contact" spy={true} smooth={true} duration={500}>
                <MessageCircle />
              </Link>
            </li>
          </ul>
        </nav>

        <div className="footer">
          <span className="copyright">&copy; {new Date().getFullYear()} Bolby Template.</span>
        </div>
      </HeaderWrapper>
    </>
  );
};

export default Header;
