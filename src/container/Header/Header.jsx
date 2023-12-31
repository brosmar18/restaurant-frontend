import React from 'react'
import { SubHeading } from '../../components'
import { images } from '../../constants';
import './Header.css';



function Header() {
  return (
    <header className='app__header app__wrapper section__padding' id='home'>
        <div className='app__wrapper_info'>
          <SubHeading title="Brewing Passion in Every Pour" />
          <h1 className='app__header-h1'>Your Kitchen Away From Home</h1>
          <p className='p__opensans' style={{margin: '2rem 0'}}>At Brewhemia, we blend the warmth of Mexican cuisine with the art of coffee. Savor our award-winning breakfast burritos with a cup of our finest brew.</p>
          <button type='button' className='custom__button'>Explore Menu</button>
        </div>
          <div className='app__wrapper_img'>
            <img src={images.welcome} alt='Coffee and croissant on a table' />
          </div>
    </header>
  )
}

export default Header
