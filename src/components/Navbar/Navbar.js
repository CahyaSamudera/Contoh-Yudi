import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from './NavbarElement';
import Logo from '../../images/logo-3.png';

const Navbar = ({ toggle }) => {
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
              style={{ width: '100px', height: 'auto' }}
            />
          </NavLogo>
          <MobileIcon onClick={toggle}>
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
                Beranda
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='/program'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                scrollNav={scrollNav}
              >
                Program
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='/struktur'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                scrollNav={scrollNav}
              >
                Struktur
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='/galeri'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                scrollNav={scrollNav}
              >
                Galeri
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='/kontak'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                scrollNav={scrollNav}
              >
                Kontak
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
