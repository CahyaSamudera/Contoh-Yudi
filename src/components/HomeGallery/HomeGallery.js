import React from 'react';
import Typewriter from 'typewriter-effect';
import './HomeGallery.css';

const HomeGallery = () => {
  return (
    <>
      <div className='wrap-gallery' id='hero'>
        <div className='content-gallery'>
          <h1>
            <Typewriter
              options={{
                strings: ['Berbagi Manfaat Kepada Masyarakat'],
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

export default HomeGallery;
