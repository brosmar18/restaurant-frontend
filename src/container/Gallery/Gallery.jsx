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
    <div>
      <h1>Gallery</h1>
    </div>
  )
}

export default Gallery
