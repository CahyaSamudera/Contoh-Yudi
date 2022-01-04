import React from 'react';
import './Koleksi.css';
import Collection1 from '../../images/collection-1.png';
import Collection2 from '../../images/collection-2.png';
import Collection3 from '../../images/collection-3.png';
import Collection4 from '../../images/collection-4.png';
import Collection5 from '../../images/collection-5.png';
import Collection6 from '../../images/cafe-2.jpeg';

const Koleksi = () => {
  return (
    <>
      <div className='full-content' id='projects'>
        <div className='header-text'>
          <h2>Our Collection</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            architecto at quas facere, porro odit voluptatem ab fuga eligendi,
            distinctio itaque!
          </p>
        </div>
        <div className='content-box'>
          <div className='content-box-info'>
            <img src={Collection1} alt='website foto' className='img-website' />
            <div className='btn-click'>
              <a href='#hero'>Detail</a>
            </div>
            <p>Modern</p>
          </div>
          <div className='content-box-info'>
            <img src={Collection2} alt='website foto' className='img-website' />
            <div className='btn-click'>
              <a href='#hero'>Detail</a>
            </div>
            <p>Souvenirs</p>
          </div>
          <div className='content-box-info'>
            <img src={Collection3} alt='website foto' className='img-website' />
            <div className='btn-click'>
              <a href='#hero'>Detail</a>
            </div>
            <p>Music</p>
          </div>
          <div className='content-box-info'>
            <img src={Collection4} alt='website foto' className='img-website' />
            <div className='btn-click'>
              <a href='#hero'>Detail</a>
            </div>
            <p>Accessories</p>
          </div>
          <div className='content-box-info'>
            <img src={Collection5} alt='website foto' className='img-website' />
            <div className='btn-click'>
              <a href='#hero'>Detail</a>
            </div>
            <p>Classic</p>
          </div>
          <div className='content-box-info'>
            <img src={Collection6} alt='website foto' className='img-website' />
            <div className='btn-click'>
              <a href='#hero'>Detail</a>
            </div>
            <p>Discs</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Koleksi;
