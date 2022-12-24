import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className='header_container'>
      <h3 className='header_surtitle'>Ieee Concordia student branch brings you with great joy</h3>
      <h1 className='header_title'>WARHACKS</h1>
      <h3 className='header_subtitle'>Where we connect both the <span style={{color: "#FF0000"}}>hostility</span> of war and <br/> the <span style={{color: "#00E0FF"}}>creativity</span> of hacking!</h3>
    </div>
  )
}

export default Header