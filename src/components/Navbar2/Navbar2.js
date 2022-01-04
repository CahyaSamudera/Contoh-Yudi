import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
// import { FaCartPlus } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import './Navbar2.css';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  ProductIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtnLink,
} from './NavbarElement2';

import Logo from '../../images/logo-3.png';
// import { Link } from 'react-router-dom';

const Navbar2 = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome} scrollNav={scrollNav}>
            <img
              src={Logo}
              alt='Logo Yayasan'
              style={{ width: '100px', height: 'auto', paddingRight: '10px' }}
            />
          </NavLogo>
          <MobileIcon onClick={toggle} scrollNav={scrollNav}>
            <FaBars />
          </MobileIcon>

          <NavMenu>
            <NavItem>
              <NavLinks
                to='/'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                scrollNav={scrollNav}
              >
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='collection'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                scrollNav={scrollNav}
              >
                Collection
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='gallery'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                scrollNav={scrollNav}
              >
                Gallery
              </NavLinks>
            </NavItem>
            {/* <NavItem>
              <NavLinks
                to='clients'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                scrollNav={scrollNav}
              >
                Blog
              </NavLinks>
            </NavItem> */}
            {/* <NavItem>
              <NavLinks
                to='products'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                scrollNav={scrollNav}
              >
              </NavLinks>
            </NavItem> */}
            <NavBtnLink
              to='kontak'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              scrollNav={scrollNav}
            >
              Contact
            </NavBtnLink>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar2;
