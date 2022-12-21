import React from 'react'
import NavbarItem from './NavbarItem'
import Logo from '../logo/Logo'
import Register from '../buttons/Register'

const Navbar = () => {
  return (
    <div className='navbar_container'>
        <Logo />
        <div className='navbar_itemlist'>
            <NavbarItem item_name={"Who Are We?"}/>
            <NavbarItem item_name={"WarHacks"}/>
        </div>
        <Register />
    </div>
  )
}

export default Navbar