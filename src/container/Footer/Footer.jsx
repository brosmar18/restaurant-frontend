import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FooterOverlay, NewsLetter } from '../../components';
import { images } from '../../constants';
import './Footer.css';


function Footer() {
  return (
    <section className='app__footer section__padding' id='login'>
      <FooterOverlay />
      <NewsLetter />

      <div className='app__footer-links'>
        <div className='app__footer-links_contact'>
          <h1 className='app__footer-headtext'>Contact Us</h1>
          <p className="p__opensans">838 12th AVE SW, Cedar Rapids, Iowa 52404</p>
        <p className="p__opensans">(319) 999-9999</p>
        <p className="p__opensans">theemail@email.com</p>
        </div>
      </div>
    </section>
  )
}

export default Footer
