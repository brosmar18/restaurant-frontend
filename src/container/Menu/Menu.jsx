import React from 'react'
import {SubHeading, MenuItem} from '../../components';
import {images, data} from '../../constants';
import './Menu.css';

function Menu() {
  return (
    <div className='app__specialMenu flex__center section__padding' id='menu'>
      <div className='app__specialMenu-title'>
        <SubHeading title='Menu that fits your palette' />
        <h1 className='headtext__cormorant'>Today's Special Menu</h1>
      </div>
    </div>
  )
}

export default Menu
