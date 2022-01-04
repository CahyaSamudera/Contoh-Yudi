import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Team from '../../components/Team/Team';
import Footer from '../../components/Footer/Footer';
import HomeStructure from '../../components/HomeStructure/HomeStructure';
import Sidebar from '../../components/Sidebar/Sidebar';

const Struktur = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HomeStructure />
      <Team />
      <Footer />
    </>
  );
};

export default Struktur;
