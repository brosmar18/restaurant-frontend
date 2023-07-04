import React, {useState, useRef} from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

function Intro() {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();
  
  return (
    <div>
      <h1>Intro</h1>
    </div>
  )
}

export default Intro
