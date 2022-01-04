import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar2 from '../../components/Navbar2/Navbar2';
import Footer from '../../components/Footer/Footer';
import HomeKoleksi from '../../components/HomeKoleksi/HomeKoleksi';
import Koleksi from '../../components/Koleksi/Koleksi';

const Collection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar2 toggle={toggle} />
      <HomeKoleksi />
      <Koleksi />
      <Footer />
    </>
  );
};

export default Collection;
