import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../../src/Navb.css'

const Navb = () => {
  return (
    <div className='body'>
        <ul className='topBar'>
            <li><FontAwesomeIcon icon={faSearch}/></li>
            <li style={{fontWeight: 'lighter'}}>ZARA</li>
            <li><FontAwesomeIcon icon={faShoppingCart}/></li>
        </ul>
        <ul className='Navbar'>
            <li className='Homebar'>Home</li>
            <li className='Aboutbar'>About</li>
            <li>Gallery</li>
            <li>Join Us</li>
        </ul>
    </div>
  )
}

export default Navb