import React from 'react';
import './Vision.css';

const Vision = () => {
  return (
    <div className='vision-section'>
      <div className='row no-gutters'>
        <h1>Visi & Misi Yayasan</h1>
        <div className='col-md-6 no-gutters'>
          <div className='leftside'>
            <h1>Visi</h1>
            <p>
              {' '}
              Memajukan Kesejahteraan Penduduk Indonesia melalui program-program
              yang pendidikan dan kesehatan yang berkesinambungan.
            </p>
          </div>
        </div>
        <div className='col-md-6 no-gutters'>
          <div className='rightside'>
            <h1>Misi</h1>
            <ul>
              <li>Menyediakan beasiswa untuk pelajar yang kurang mampu</li>
              <li>
                Mengadakan seminar-seminar dan pelatihan-pelatihan keterampilan
                guna memberdayakan masyarakat umum
              </li>
              <li>
                Mengadakan program-program kesehatan keluarga secara berkala
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
