import React from 'react'
import {images} from '../../constants';
import {SubHeading} from '../../components';

function Chef() {
  return (
    <section className='app__bg app__wrapper section__padding'>
      <div className='app__wrapper_img app__wrapper__img-referse'>
        <img src={images.chef} alt='chef photo' />
      </div>
      <div className='app__wrapper_info'>
        <SubHeading title="Chef's Word" />
        <h1 className='headtext__cormorant'>What we believe in</h1>

        <div className='app__chef-content'>
          <div className='app__chef-content_quote'>
            <img src={images.quote} alt='quote' />
            <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, dolorem facilis magnam quia aut expedita culpa assumenda!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Chef
