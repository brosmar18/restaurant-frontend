import React, {useState, useEffect} from 'react'
import { SubHeading } from '../../components'
import './Header.css';
import {images} from '../../constants';



function Header() {
  const [copyText, setCopyText] = useState([]);
  return (
    <header className='app__header app__wrapper section__padding' id='home'>
        <div className='app__wrapper_info'>
          <SubHeading title="Chase the new flavour" />
          <h1 className='app__header-h1'>The Key to Fine Dining</h1>
          <p className='p__opensans' style={{margin: '2rem 0'}}>The description of the website would go here. Add a call to action to slogan for the business. Something that will catch the client's eye and interest</p>
          <button type='button' className='custom__button'>Explore Menu</button>
        </div>

        <div className='app__wrapper_img'>
          <img src={images.welcome} alt='welcome' />
        </div>
    </header>
  )
}

export default Header
