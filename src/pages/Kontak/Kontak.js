import React, { useState } from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2';
import Footer from '../../components/Footer/Footer';
import Contact from '../../components/Contact/Contact';
import HomeContact from '../../components/HomeContact/HomeContact';
import Sidebar from '../../components/Sidebar/Sidebar';

const Kontak = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar2 toggle={toggle} />
      <HomeContact />
      <Contact />
      <Footer />
    </>
  );
};

export default Kontak;
