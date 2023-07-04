import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FooterOverlay, NewsLetter } from '../../components';

function Footer() {
  return (
    <section className='app__footer section__padding' id='login'>
      <FooterOverlay />
      <NewsLetter />
    </section>
  )
}

export default Footer
