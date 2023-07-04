import React, {useEffect, useState} from 'react'
import { SubHeading } from '../../components'
import './Header.css';
import client, {urlFor} from '../../client/client';



function Header() {
const [brandImgs, setBrandImgs] = useState([]);

useEffect(() => {
  const query = `*[_type == "brandImg"]`

  client.fetch(query).then((data) =>setBrandImgs(data))
},[]);

  return (
    <header className='app__header app__wrapper section__padding' id='home'>
        <div className='app__wrapper_info'>
          <SubHeading title="Brewing Passion in Every Pour" />
          <h1 className='app__header-h1'>Your Kitchen, Away From Home</h1>
          <p className='p__opensans' style={{margin: '2rem 0'}}>At Brewhemia, we blend the warmth of Mexican cuisine with the art of coffee. Savor our award-winning breakfast burritos with a cup of our finest brew.</p>
          <button type='button' className='custom__button'>Explore Menu</button>
        </div>

        {brandImgs.map((brandImg, index) => (
          <div className='app__wrapper_img'>
            <img src={urlFor(brandImg.welcome)} alt={brandImg.name} />
          </div>
        ))}

    </header>
  )
}

export default Header
