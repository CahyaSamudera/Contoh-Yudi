import React from 'react';
import Typewriter from 'typewriter-effect';
import './GalleryTop.css';

const GalleryTop = () => {
  return (
    <>
      <div className='wrap-gallery2' id='hero'>
        <div className='content-gallery2'>
          <h1>
            <Typewriter
              options={{
                strings: ['Share Knowledge and Experince!'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </>
  );
};

export default GalleryTop;
