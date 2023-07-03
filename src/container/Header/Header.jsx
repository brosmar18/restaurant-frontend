import React from 'react'
import { SubHeading } from '../../components'
import './Header.css';

function Header() {
  return (
    <header className='app__header app__wrapper section__padding' id='home'>
        <div className='app__wrapper_info'>
          <SubHeading title="Chase the new flavour" />
          <h1 className='app__header-h1'>The Key to Fine Dining</h1>
        </div>

        <div className='app__wrapper_img'>

        </div>
    </header>
  )
}

export default Header
