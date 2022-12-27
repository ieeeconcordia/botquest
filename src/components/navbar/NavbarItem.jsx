import React from 'react';
import './navbar.css';

const NavbarItem = (props) => {
  return (
    <a className='navbar_item_div' href={props.href}>
        <p className='navbar_item'>{props.item_name}</p>
    </a>
  )
}

export default NavbarItem