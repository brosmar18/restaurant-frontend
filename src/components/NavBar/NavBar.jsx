import React, {useState} from 'react'
import {images} from '../../constants';
import './NavBar.scss';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';


function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  
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

        <div className='app__navbar-smallscreen'>
          <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' />
        </div>
    </nav>
  )
}

export default NavBar
