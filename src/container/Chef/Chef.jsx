import React from 'react'
import {images} from '../../constants';

function Chef() {
  return (
    <section className='app__bg app__wrapper section__padding'>
      <div className='app__wrapper_img app__wrapper__img-referse'>
        <img src={images.chef} alt='chef photo' />
      </div>
    </section>
  )
}

export default Chef
