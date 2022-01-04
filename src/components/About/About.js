import React from 'react';
import './About.css';
import Showcase from '../../images/cafe-7.jpeg';

const About = () => {
  return (
    <>
      <section className='section-a' id='about'>
        <div className='container-a'>
          <div className='image-about-a'>
            <img src={Showcase} alt='' />
          </div>

          <div className='aboutus'>
            <h1>About Us</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              earum, consequuntur atque sit provident in sunt explicabo
              asperiores aliquid sed! Laudantium culpa modi quas maxime ratione
              temporibus, libero neque. Id, sit temporibus distinctio molestias
              rerum ad repellat. Illo ipsa adipisci, sint non molestiae
              temporibus fugit? Totam ullam dicta corporis provident? Natus,
              magnam? Voluptatibus, nemo. Voluptate vitae aspernatur laudantium
              cumque dolorum, vero corporis deserunt nesciunt, iste quisquam
              provident incidunt accusamus. Expedita sunt molestiae totam
              impedit perspiciatis nobis earum, dolor assumenda. Dolorum
              corrupti aut magni sunt eveniet, soluta minima dolore ratione
              distinctio eum qui possimus deleniti provident voluptatibus cum
              reprehenderit fuga illum animi! Eaque nulla voluptatibus dolorem
              nihil.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel eius
              animi sed delectus quam eveniet cumque nemo expedita suscipit
              provident ab fugit non quisquam assumenda, blanditiis doloremque
              perferendis vitae quis.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
