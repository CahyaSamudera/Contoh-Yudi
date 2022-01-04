import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Programs from '../../components/Programs/Programs';
import HomeProgram from '../../components/HomeProgram/HomeProgram';
import Sidebar from '../../components/Sidebar/Sidebar';

const Program = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HomeProgram />
      <Programs />
      <Footer />
    </>
  );
};

export default Program;
