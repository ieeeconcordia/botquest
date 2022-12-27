import React from 'react'
import './testimony.css'
import Lina from '../../assets/img/Lina.JPG'

const Testimony = () => {
  return (
    <div className='testimony_container'>

        <h2 className='testimony_title'>A word from a past participant</h2>
        <div style={{width: "230px", height: "0", border: "1px solid #F0F0F1"}}></div>

        <div className='testimony_text_container'>
          <p className='testimony_text'>" Warhacks is a great competition for beginners in robotics,
          or for anyone who wishes to discover their interests through hands-on experience.
          I was introduced to Warhacks in CEGEP and it's what led me to pursue a program in Engineering.
          If you're interested in robotics, try it out! "</p>
          <div className='testimony_witness'>
              <img src={Lina} alt="Testimony person" style={{maxWidth: "175px", height: "auto", borderRadius: "130px", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}></img>
              <p className='testimony_witness_text'>- Lina Ismail, presi</p>
          </div>
        </div>

    </div>
  )
}

export default Testimony