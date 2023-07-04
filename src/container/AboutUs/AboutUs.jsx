import React from 'react'
import {images} from '../../constants';

function AboutUs() {
  return (
    <section className='app__aboutus app__bg flex__center section__padding' id='about'>
      <div className='app__aboutus-overlay flex__center'>
        <img src={images.G} alt='G' />
      </div>
    </section>
  )
}

export default AboutUs
