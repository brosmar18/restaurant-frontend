import React from 'react'
import {images} from '../../constants';
import './NavBar.scss';

function NavBar() {
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.gericht} alt='logo' />
      </div>
        <ul className='app__navbar-links'>
          <li className='p__opensans'><a href='#home'>Home</a></li>
          <li className='p__opensans'><a href='#home'>About</a></li>
          <li className='p__opensans'><a href='#home'>Menu</a></li>
          <li className='p__opensans'><a href='#home'>Awards</a></li>
          <li className='p__opensans'><a href='#home'>Contact</a></li>
        </ul>
        <div className='app__navbar-login'>
          <a href='#login' className='p__opensans'>Log In / Registration</a>
          <div />
          <a href='/' className='p__opensans'>Book Catering</a>
        </div>
    </nav>
  )
}

export default NavBar
