import React from 'react';
import './whatwarhacks.css';
import InfoCard from '../../components/cards/InfoCard';

import image1 from '../../assets/img/780A0707.jpg';
import image2 from '../../assets/img/780A0740.jpg';

const WhatWarhacks = () => {
  return (
    <div className='wiw_container'>
      <div className='wiw_card'>

        <div className='wiw_card_detail'>
          <h1 className='wiw_card_detail_title'>
            What is Warhacks?
          </h1>
          <p className='wiw_card_detail_text'>
            Warhacks is an introductory hardware Hackathon designed specifically for you. 
            Come spend the day with us, and you will get to build your robot from scratch.
          </p>
        </div>

        <div className='wiw_card_cards'>
          <InfoCard
            imagesrc={image1}
            cardTitle="No experience needed!"
            cardDetail="Warhacks offers different workshop tutorials
            that will teach you skills for robotics building."
          />
          <InfoCard
            imagesrc={image2}
            cardTitle="What type of tutorials? "
            cardDetail="Things like programming, motor controlling,
            sensor reading and much more will be covered."
          />
        </div>
      </div>
    </div>
  )
}

export default WhatWarhacks