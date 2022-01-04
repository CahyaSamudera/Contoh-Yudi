import React from 'react';
import './News.css';
import News1 from '../../images/cafe-2.jpeg';
import News2 from '../../images/cafe-16.jpeg';
import News3 from '../../images/cafe-13.jpeg';

const News = () => {
  return (
    <section className='s1'>
      <div className='main-container'>
        <h3 style={{ textAlign: 'center' }}>New Collections</h3>
        <div className='post-wrapper'>
          <div className='project-detail'>
            <div className='post'>
              <img className='thumbnail' src={News1} alt='' />
              <div className='post-preview'>
                <h6 className='post-title'>Collection 1</h6>
                <p className='post-intro'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Reiciendis eos maxime dicta, nisi nobis sequi quasi. Labore,
                  autem veritatis, a ut magnam sint natus dolores reiciendis.
                </p>
                <a href='#'>Detail</a>
              </div>
            </div>
          </div>

          <div className='project-detail'>
            <div className='post'>
              <img className='thumbnail' src={News2} alt='' />
              <div className='post-preview'>
                <h6 className='post-title'>Collection 2</h6>
                <p className='post-intro'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium, vel maxime numquam quisquam provident autem iusto
                  alias perspiciatis error veritatis alias perspiciatis error
                  veritatis.
                </p>
                <a href='#'>Detail</a>
              </div>
            </div>
          </div>

          <div className='project-detail'>
            <div className='post'>
              <img className='thumbnail' src={News3} alt='' />
              <div className='post-preview'>
                <h6 className='post-title'>Collection 3</h6>
                <p className='post-intro'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Numquam nobis impedit sunt? Accusamus aliquam repellat
                  quibusdam, fugiat voluptatum eligendi voluptate.
                </p>
                <a href='#'>Detail</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
