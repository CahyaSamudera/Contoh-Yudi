import React from 'react';
import './Contact.css';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <>
      <div className='contact' id='contact'>
        <div className='content-title'>
          <h2>Contact Us</h2>
        </div>
        <div className='container-3'>
          <div className='contactInfo'>
            <div className='box-2'>
              <div className='icon'>
                <FaMapMarkerAlt />
              </div>
              <div className='text'>
                <h3>Address</h3>
                <p>
                  Jl. Tarumanegara No.88, <br /> Cirendeu Raya, <br /> Tangerang
                  Selatan <br /> 15412
                </p>
              </div>
            </div>
            <div className='box-2'>
              <div className='icon'>
                {' '}
                <FaPhone />{' '}
              </div>
              <div className='text'>
                <h3>Phone</h3>
                <p>+62 812 8108 2447</p>
              </div>
            </div>
            <div className='box-2'>
              <div className='icon'>
                {' '}
                <FaEnvelope />{' '}
              </div>
              <div className='text'>
                <h3>Email</h3>
                <p>cafeloliatliat@gmail.com</p>
              </div>
            </div>
          </div>
          <div className='contactForm'>
            <form>
              <h2>Send Message</h2>
              <div className='inputBox'>
                <input type='text' name='' required />
                <span>Name</span>
              </div>
              <div className='inputBox'>
                <input type='text' name='' required />
                <span>Email</span>
              </div>
              <div className='inputBox'>
                <textarea required />
                <span>Your Message ...</span>
              </div>
              <div className='inputBox'>
                <input type='submit' name='' value='Submit' />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
