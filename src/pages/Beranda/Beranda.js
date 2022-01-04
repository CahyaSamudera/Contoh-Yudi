import React, { useState } from 'react';
// import Hero from '../../components/Hero/Hero';
// import Navbar from '../../components/Navbar/Navbar';
import About from '../../components/About/About';
import Footer from '../../components/Footer/Footer';
import News from '../../components/News/News';
// import Vision from '../../components/Vision/Vision';
import Sidebar from '../../components/Sidebar/Sidebar';
// import Whatsapp from '../../components/Whatsapp';
import Navbar2 from '../../components/Navbar2/Navbar2';
import { Hero2 } from '../../components/Hero2/Hero2';

const Beranda = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar2 toggle={toggle} />
      <Hero2 />
      <About />
      {/* <Vision /> */}
      <News />
      {/* <Whatsapp /> */}
      <Footer />
    </>
  );
};

export default Beranda;
