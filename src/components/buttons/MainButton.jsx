import React from 'react'
import './buttons.css';

const MainButton = (props) => {
  return (
    <a className='btn_div' target='_blank' style={{background: props.background, margin: props.margin, boxShadow: props.boxShadow, borderBottom: props.borderBottom}} href={props.href}>
        <p className='register_btn' style={{color: props.color}}>{props.text}</p>
    </a>
  )
}

export default MainButton
