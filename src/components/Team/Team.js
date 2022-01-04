import React from 'react';
import './Team.css';
import Team1 from '../../images/img1.jpg';
import Team2 from '../../images/team-11.jpg';
import Team3 from '../../images/team-12.jpg';

const Team = () => {
  return (
    <>
      <div className='container-4'>
        <h1 className='heading-team'>Pengurus Yayasan</h1>

        <div className='profiles'>
          <div className='profile'>
            <img src={Team1} className='profile-img' />

            <h3 className='user-name'>William</h3>
            <h5>Creative Director</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              eveniet soluta hic sunt sit reprehenderit.
            </p>
          </div>
          <div className='profile'>
            <img src={Team2} className='profile-img' />

            <h3 className='user-name'>Camila</h3>
            <h5>Managing Partner</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              facilis sint quod.
            </p>
          </div>
          <div className='profile'>
            <img src={Team3} className='profile-img' />

            <h3 className='user-name'>Isabella</h3>
            <h5>Project Manager</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, eveniet!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
