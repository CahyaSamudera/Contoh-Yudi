import React from 'react';
import './Footer.css';
import Logo1 from '../../images/logo-3.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-left'>
        <img src={Logo1} alt='' />
        {/* <p>Yayasan Professor Ma'ruf Amin</p> */}
        <div className='socials'>
          <a href='#'>
            <i className='fab fa-facebook'></i>
          </a>
          <a href='#'>
            <i className='fab fa-twitter'></i>
          </a>
          <a href='#'>
            <i className='fab fa-instagram'></i>
          </a>
          <a href='#'>
            <i className='fab fa-youtube'></i>
          </a>
        </div>
      </div>
      <ul className='footer-right'>
        <li>
          <h2>About Us</h2>
          <ul className='box'>
            <li>
              <a href='#'>History</a>
            </li>
            <li>
              <a href='#'>Team</a>
            </li>
            <li>
              <a href='#'>Partners</a>
            </li>
          </ul>
        </li>
        <li className='features'>
          <h2>Site Menu</h2>
          <ul className='box'>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>Collection</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </li>
        <li>
          <h2>Address</h2>
          <ul className='box'>
            <li>
              <a href='#'>Jl. Tarumanegara No.88 Cirendeu Raya</a>
            </li>
            <li>
              <a href='#'>Ciputat Timur Tangerang Selatan</a>
            </li>
            <li>
              <a href='#'>15412</a>
            </li>
          </ul>
        </li>
      </ul>
      <div className='footer-bottom'>
        <p>All Rights Reserved &copy;2022 | Cafe Loliatliat </p>
      </div>
    </footer>
  );
};

export default Footer;
