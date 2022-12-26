import React from 'react'
import NavbarItem from './NavbarItem'
import Register from '../buttons/Register'
import Logo from '../logo/Logo'

import hamburgerMenu from '../../assets/img/Hamburger Menu.png';
import closeMenu from '../../assets/img/icons/X-icon.png';

const Navbar = () => {
  return (
    <div className='navbar_container'>

        <Logo />
        <div className='navbar_itemlist'>
            <NavbarItem item_name={"Who Are We?"}/>
            <NavbarItem item_name={"WarHacks"}/>
        </div>

        <div id='navbar_mobile'>
          <a href='#' className='navbar_mobile_hamburgerIcon'>
            <img src={hamburgerMenu} alt='Hamburger Menu' />
          </a>
          <a href='#' className='navbar_mobile_closeIcon'>
            <img src={closeMenu} alt='Hamburger Menu' />
          </a>
        </div>

    </div>
  )
}

export default Navbar