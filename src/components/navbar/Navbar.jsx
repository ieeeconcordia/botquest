import React from 'react'
import NavbarItem from './NavbarItem'
import Logo from '../logo/Logo'

const Navbar = () => {
  return (
    <div className='navbar_container'>

        <Logo />
        <div className='navbar_itemlist'>
          <NavbarItem 
            href={"https://www.facebook.com/media/set/?set=a.2157921424286586&type=3"}
            item_name={"Previous Warhacks"}/>
        </div>

        <div id='navbar_mobile'>
          <NavbarItem
            href={"https://www.facebook.com/media/set/?set=a.2157921424286586&type=3"} 
            item_name={"Gallery"}
          />
        </div>

    </div>
  )
}

export default Navbar