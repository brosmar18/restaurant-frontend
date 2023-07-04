import React, {useRef} from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

function Gallery() {

  const scrollRef = useRef(null);
  const scroll = (direction) => {
    const {current} = scrollRef;

    if (direction === 'left') {
      current.scrollRef -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };


  return (
    <section className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title="Instagram" />
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <button type='button' className='custom__button'>View More</button>
      </div>
      <div className='app__gallery-images'>
        
      </div>
    </section>
  )
}

export default Gallery
