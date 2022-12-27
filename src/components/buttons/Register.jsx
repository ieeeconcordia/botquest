import React from 'react'
import './buttons.css';

const Register = (props) => {
  return (
    <a className='register_btn_div' style={{background: props.background, margin: props.margin}} href="https://docs.google.com/forms/d/e/1FAIpQLScV9RSNqekgSI8L-rZKJTPsq0vgwg_nYEdyXl-eUcARq4l6oA/viewform?usp=sf_link">
        <p className='register_btn'>{props.text}</p>
    </a>
  )
}

export default Register