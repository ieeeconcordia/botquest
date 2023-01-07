import React from 'react';
import './footer.css';
import { Logo } from '../../components';

import FacebookLogo from '../../assets/img/icons/Social Media/Facebook.png';
import InstagramLogo from '../../assets/img/icons/Social Media/Instagram.png';
import DiscordLogo from '../../assets/img/icons/Social Media/Discord.png';

const Footer = () => {
  return (
    <div className='footer_container'>

      <Logo />

      <div className='footer_text'>
        <p className='footer_text_bold'>Address</p>
        <p className='footer_text_regular'>1450 Rue Guy, <br/>Montréal, QC H3H 0A1</p>
        <p className='footer_text_bold'>Ask any questions @</p>
        <p className='footer_text_regular'>info@ieeeconcordia.ca</p>
        <p className='footer_text_bold'>Check out our social media</p>
      </div>

      <div className='footer_socials'>

        <a href='https://www.facebook.com/ieeeconcordia'>
          <img src={FacebookLogo} alt='Facebook Logo'></img>
        </a>
        <a href='https://www.instagram.com/ieee_concordia/?hl=en'>
          <img src={InstagramLogo} alt='Facebook Logo'></img>
        </a>
        <a href='https://discord.gg/EyEMhPDr'>
          <img src={DiscordLogo} alt='Facebook Logo'></img>
        </a>

      </div>
      <p className='footer_rights'>@2023 IEEE Concordia. All rights reserved.</p>
    </div>
  )
}

export default Footer