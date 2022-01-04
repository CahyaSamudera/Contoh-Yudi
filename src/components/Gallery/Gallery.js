import React from 'react';
import './Gallery.css';
import { SRLWrapper } from 'simple-react-lightbox';
import Gallery1 from '../../images/teacher-1.jpg';
import Gallery2 from '../../images/teacher-2.jpg';
import Gallery3 from '../../images/teacher-3.jpg';
import Gallery4 from '../../images/teacher-4.jpg';
import Gallery5 from '../../images/teacher-5.jpg';
import Gallery6 from '../../images/teacher-6.jpg';
import Gallery7 from '../../images/teacher-7.jpg';
import Gallery8 from '../../images/teacher-8.jpg';

const Gallery = () => {
  return (
    <>
      <section className='gallery' id='gallery'>
        <div className='global-headline'>
          <h2 className='sub-headline'>Gallery</h2>
        </div>
        <SRLWrapper>
          <div className='container2'>
            <div className='gallery'>
              <img src={Gallery1} alt='' />
            </div>
            <div className='gallery'>
              <img src={Gallery2} alt='' />
            </div>
            <div className='gallery'>
              <img src={Gallery3} alt='' />
            </div>
            <div className='gallery'>
              <img src={Gallery4} alt='' />
            </div>
          </div>
          <div className='container2'>
            <div className='gallery'>
              <img src={Gallery5} alt='' />
            </div>
            <div className='gallery'>
              <img src={Gallery6} alt='' />
            </div>
            <div className='gallery'>
              <img src={Gallery7} alt='' />
            </div>
            <div className='gallery'>
              <img src={Gallery8} alt='' />
            </div>
          </div>
        </SRLWrapper>
      </section>
    </>
  );
};

export default Gallery;
