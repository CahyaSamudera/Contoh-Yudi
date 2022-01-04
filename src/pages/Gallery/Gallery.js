import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar2 from '../../components/Navbar2/Navbar2';
import Footer from '../../components/Footer/Footer';
import ContentGallery from '../../components/ContentGallery/ContentGallery';
import GalleryTop from '../../components/GalleryTop/GalleryTop';

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar2 toggle={toggle} />
      <GalleryTop />
      <ContentGallery />
      <Footer />
    </>
  );
};

export default Gallery;
