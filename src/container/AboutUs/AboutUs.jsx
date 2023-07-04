import React from 'react'
import {images} from '../../constants';
import './AboutUs.css';

function AboutUs() {
  return (
    <section className='app__aboutus app__bg flex__center section__padding' id='about'>
      <div className='app__aboutus-overlay flex__center'>
        <img src={images.mug} alt='mug' />
      </div>
      <div className='app__aboutus-content flex__center'>
        <div className='app__aboutus-content_about'>
          <h1 className='headtext__cormorant'>About Us</h1>
          <img src={images.spoon} alt='about_spoon' className='spoon__img' />
          <p className='p__opensans'>Nestled in the heart of Cedar Rapids' New Bohemia District, Brewhemia is a family-owned café steeped in tradition and community spirit. Our name symbolizes a commitment to excellence in beverages and an embrace of our vibrant neighborhood. Here, you will discover a cozy café ambiance where our passion for exceptional coffee mingles with the authentic flavors of Mexican breakfast cuisine. Our award-winning burritos, alongside a versatile selection of local craft beers, wine, and spirits, define a culinary experience you won't forget.</p>
          <button type='button' className='custom__button'>Know More</button>
        </div>

        <div className='app__aboutus-content_knife flex__center'>
          <img src={images.spatula} alt='Spatula' />
        </div>

        <div className='app__aboutus-content_history'>
          <h1 className='headtext__cormorant'>Our History</h1>
          <img src={images.spoon} alt='about_spoon' className='spoon__img' />
          <p className='p__opensans'>Born in the heart of Cedar Rapids' New Bohemia District, Brewhemia is a family-owned café embodying community spirit. We're known for our locally-sourced coffee and Mexican breakfast cuisine, including our award-winning burritos. Our commitment to quality ensures each cup and dish we serve delivers an exceptional, flavorful experience. Brewhemia is more than a café; it's a testament to our vibrant community, heritage, and the joy of sharing good food and drink.</p>
          <button type='button' className='custom__button'>Know More</button>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
