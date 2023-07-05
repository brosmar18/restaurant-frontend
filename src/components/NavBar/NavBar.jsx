import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './NavBar.css';
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt='logo' />
      </div>
      <ul className='app__navbar-links'>
        {['home', 'menu', 'catering', 'about', 'contact'].map((item) => (
          <li key={item} className='p__opensans'>
            <Link to={`/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
      <div className='app__navbar-login'>
        <Link to='/login' className='p__opensans'>Log In / Registration</Link>
        <div />
        <Link to='/' className='p__opensans'>Book Event</Link>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              {['home', 'about', 'menu', 'awards', 'contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item}`} onClick={() => setToggleMenu(false)}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
};

export default Navbar;