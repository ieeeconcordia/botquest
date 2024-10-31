import React from 'react'
import './cardsection.css'
import InfoCards from '../../components/cards/InfoCard'
import InfoCardNumList from '../../components/cards/InfoCardNumList'
import image2 from '../../assets/img/780A0707.jpg'
import image3 from '../../assets/img/780A0754.jpg'
import image1 from '../../assets/img/780A0717.jpg'

const CardSection = () => {
  return (
    <div className='card_section_container'>
        <InfoCards 
            imagesrc={image1}
            cardTitle='What you need'
            cardDetail='Only your computer!
            There is no previous knowledge needed.
            We will teach you everything you need to know. Things like programming
            and controlling motors, reading data from sensors and much more!'
        />
        <InfoCards 
            imagesrc={image2}
            cardTitle='The competition'
            cardDetail='After we teach you everything you need to know,
            you will in teams of 3 or 4, put your creativity to work and
            build a robot that will accomplish some tasks. You compete on how many tasks your robot can do :)'
        />
        <InfoCardNumList 
            imagesrc={image3}      
        />
    </div>
  )
}

export default CardSection