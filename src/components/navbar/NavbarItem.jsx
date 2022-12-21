import React from 'react';
import './navbar.css';

const NavbarItem = ({item_name}) => {
  return (
    <a className='navbar_item_div' href=''>
        <p className='navbar_item'>{item_name}</p>
    </a>
  )
}

export default NavbarItem