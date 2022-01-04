import React from 'react';
import './Programs.css';
import House1 from '../../images/house-1.jpg';
import House2 from '../../images/house-2.jpg';
import House5 from '../../images/house-5.jpg';
import House6 from '../../images/house-6.jpg';

const Programs = () => {
  return (
    <>
      <div className='full-content' id='projects'>
        <div className='header-text'>
          <h2>Program Terbaru</h2>
          <p>
            Dalam usahanya memajukan pendidikan di Indonesia, Yayasan KH Makruf
            Amin selalu berusaha untuk membuat program-program edukatif yang
            bermanfaat bagi masyarakat umum.
          </p>
        </div>
        <div className='content-box'>
          <div className='content-box-info'>
            <img src={House1} alt='website foto' className='img-website' />
            <div className='btn-click'>
              <a href='#hero'>Detail</a>
            </div>
            <p>Program Pendidikan</p>
          </div>
          <div className='content-box-info'>
            <img src={House2} alt='website foto' className='img-website' />
            <div className='btn-click'>
              <a href='#hero'>Detail</a>
            </div>
            <p>Program Kemasyarakatan</p>
          </div>
          <div className='content-box-info'>
            <img src={House1} alt='website foto' className='img-website' />
            <div className='btn-click'>
              <a href='#hero'>Detail</a>
            </div>
            <p>Program Anak Yatim</p>
          </div>
          <div className='content-box-info'>
            <img src={House6} alt='website foto' className='img-website' />
            <div className='btn-click'>
              <a href='#hero'>Detail</a>
            </div>
            <p>Program Madrasah</p>
          </div>
          <div className='content-box-info'>
            <img src={House5} alt='website foto' className='img-website' />
            <div className='btn-click'>
              <a href='#hero'>Detail</a>
            </div>
            <p>Program Beasiswa</p>
          </div>
          <div className='content-box-info'>
            <img src={House6} alt='website foto' className='img-website' />
            <div className='btn-click'>
              <a href='#hero'>Detail</a>
            </div>
            <p>Program Kesehatan</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Programs;
