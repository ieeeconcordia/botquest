import React from 'react'
import './infocard.css'

const InfoCards = (props) => {
  return (
    <div className="infocard_container">
        <div className="infocard_image">
            <img
              loading="lazy"
              src= {props.imagesrc}
              alt= "Card Image"
              className="image"
            />
        </div>
        <div className="infocard_details">
            <div className="infocard_title">{props.cardTitle}</div>
            <div className="infocard_description">{props.cardDetail}</div>
        </div>
      </div>
  )
}

export default InfoCards