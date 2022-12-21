import React from 'react';
import './logo.css';
import Logo_img from '../../assets/img/logo-white.png';

const Logo = () => {
  return (
    <a className='logo_container' href=''>
        <img src={Logo_img} className='logo_img'/>
        
        <div className='logo_title'>
            IEEE Concordia
        </div>
    </a>
  )
}

export default Logo;