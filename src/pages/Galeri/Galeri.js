import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Gallery from '../../components/Gallery/Gallery';
import Footer from '../../components/Footer/Footer';
import HomeGallery from '../../components/HomeGallery/HomeGallery';
import Sidebar from '../../components/Sidebar/Sidebar';

const Galeri = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HomeGallery />
      <Gallery />
      <Footer />
    </>
  );
};

export default Galeri;
