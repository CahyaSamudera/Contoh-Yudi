import React from 'react';
import './ContentGallery.css';
import gallery1 from '../../images/cafe-1.jpeg';
import gallery2 from '../../images/cafe-2.jpeg';
import gallery3 from '../../images/cafe-3.jpeg';
import gallery4 from '../../images/cafe-4.jpeg';
import gallery5 from '../../images/cafe-5.jpeg';
import gallery6 from '../../images/cafe-6.jpeg';
import gallery7 from '../../images/cafe-7.jpeg';
import gallery8 from '../../images/cafe-8.jpeg';

const ContentGallery = () => {
  return (
    <>
      <div className='container5'>
        <div className='box'>
          <div className='imgBox'>
            <img src={gallery1} alt='' />
          </div>
          <div className='details'>
            <div className='content7'>
              <h2>Gambar 1</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed,
                numquam placeat. Optio, et?
              </p>
            </div>
          </div>
        </div>
        <div className='box'>
          <div className='imgBox'>
            <img src={gallery2} alt='' />
          </div>
          <div className='details'>
            <div className='content7'>
              <h2>Gambar 2</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed,
                numquam placeat. Optio, et?
              </p>
            </div>
          </div>
        </div>
        <div className='box'>
          <div className='imgBox'>
            <img src={gallery3} alt='' />
          </div>
          <div className='details'>
            <div className='content7'>
              <h2>Gambar 3</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed,
                numquam placeat. Optio, et?
              </p>
            </div>
          </div>
        </div>
        <div className='box'>
          <div className='imgBox'>
            <img src={gallery4} alt='' />
          </div>
          <div className='details'>
            <div className='content7'>
              <h2>Gambar 4</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed,
                numquam placeat. Optio, et?
              </p>
            </div>
          </div>
        </div>
        <div className='box'>
          <div className='imgBox'>
            <img src={gallery5} alt='' />
          </div>
          <div className='details'>
            <div className='content7'>
              <h2>Gambar 5</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed,
                numquam placeat. Optio, et?
              </p>
            </div>
          </div>
        </div>
        <div className='box'>
          <div className='imgBox'>
            <img src={gallery6} alt='' />
          </div>
          <div className='details'>
            <div className='content7'>
              <h2>Gambar 6</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed,
                numquam placeat. Optio, et?
              </p>
            </div>
          </div>
        </div>
        <div className='box'>
          <div className='imgBox'>
            <img src={gallery7} alt='' />
          </div>
          <div className='details'>
            <div className='content7'>
              <h2>Gambar 7</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed,
                numquam placeat. Optio, et?
              </p>
            </div>
          </div>
        </div>
        <div className='box'>
          <div className='imgBox'>
            <img src={gallery8} alt='' />
          </div>
          <div className='details'>
            <div className='content7'>
              <h2>Gambar 8</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed,
                numquam placeat. Optio, et?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentGallery;
