import React from 'react';
import './Hero.css';
import Slide1 from '../../images/cafe-1.jpeg';
import Slide2 from '../../images/cafe-2.jpeg';
import Slide3 from '../../images/cafe-3.jpeg';

const Hero = () => {
  return (
    <header>
      <div
        id='carousel-example-generic'
        className='carousel slide'
        data-ride='carousel'
      >
        {/* Indicators */}
        <ol className='carousel-indicators'>
          <li
            data-target='#carousel-example-generic'
            data-slide-to='0'
            className='active'
          ></li>
          <li data-target='#carousel-example-generic' data-slide-to='1'></li>
          <li data-target='#carousel-example-generic' data-slide-to='2'></li>
        </ol>

        {/* Wrapper for slides */}
        <div className='carousel-inner' role='listbox'>
          <div className='item active'>
            <div
              className='banner drk'
              style={{
                backgroundImage: `url(${Slide1})`,
              }}
            ></div>
            <div className='carousel-caption'>
              <h2
                className='animated bounceInRight'
                style={{ animationDelay: '1s' }}
              >
                Kami <span>Peduli</span>
              </h2>
              <h3
                className='animated bounceInLeft'
                style={{ animationDelay: '2s' }}
              >
                Berbakti dan Mengabdi Untuk Negeri
              </h3>
              <p
                className='animated bounceInRight'
                style={{ animationDelay: '3s' }}
              >
                <button href='#'>Hubungi Kami</button>
              </p>
            </div>
          </div>
          <div className='item'>
            <div
              className='banner drk'
              style={{
                backgroundImage: `url(${Slide2})`,
              }}
            ></div>
            <div className='carousel-caption'>
              <h2
                className='animated slideInDown'
                style={{ animationDelay: '1s' }}
              >
                We Are <span>Franco</span>
              </h2>
              <h3
                className='animated fadeInUp'
                style={{ animationDelay: '2s' }}
              >
                Web Design and Development Agency
              </h3>
              <p className='animated zoomIn' style={{ animationDelay: '3s' }}>
                <button href='#'>Contact us</button>
              </p>
            </div>
          </div>
          <div className='item'>
            <div
              className='banner drk'
              style={{
                backgroundImage: `url(${Slide3})`,
              }}
            ></div>
            <div className='carousel-caption'>
              <h2 className='animated zoomIn' style={{ animationDelay: '1s' }}>
                We Are <span>Diligent</span>
              </h2>
              <h3
                className='animated fadeInLeft'
                style={{ animationDelay: '2s' }}
              >
                Web Design and Development Agency
              </h3>
              <p className='animated zoomIn' style={{ animationDelay: '3s' }}>
                <button href='#'>Contact us</button>
              </p>
            </div>
          </div>
        </div>

        {/* Control */}
        <a
          className='left carousel-control'
          href='#carousel-example-generic'
          role='button'
          data-slide='prev'
        >
          <span
            className='glyphicon glyphicon-chevron-left'
            aria-hidden='true'
          ></span>
          <span className='sr-only'>Previous</span>
        </a>
        <a
          className='right carousel-control'
          href='#carousel-example-generic'
          role='button'
          data-slide='next'
        >
          <span
            className='glyphicon glyphicon-chevron-right'
            aria-hidden='true'
          ></span>
          <span className='sr-only'>Next</span>
        </a>
      </div>
    </header>
  );
};

export default Hero;
