import React from 'react'

function NavBar() {
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <ul className='app__navbar-links'>
          <li className='p_opensans'><a href='#home'>Home</a></li>
          <li className='p_opensans'><a href='#home'>About</a></li>
          <li className='p_opensans'><a href='#home'>Menu</a></li>
          <li className='p_opensans'><a href='#home'>Awards</a></li>
          <li className='p_opensans'><a href='#home'>Contact</a></li>
        </ul>
        <div className='app__navbar-login'>
          <a href='#login' className='p__opensans'>Log In / Registration</a>
          <div />
          <a href='/' className='p__opensans'>Book Catering</a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
