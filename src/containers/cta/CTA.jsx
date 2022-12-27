import React from 'react'
import './cta.css'
import { Register } from '../../components'

const CTA = () => {
  return (
    <div className='cta_container'>

        <div className='cta_main'>
            <h2 className='cta_main_title'>Hurry up!</h2>
            <p className='cta_main_text'>Warhacks will be on February 11th, but places are limited</p>
            <Register 
                text='Register Now!'
                background='#63BAFF'
                margin='10px'
            />
        </div>

        <div style={{width: "50%", height: "0", border: "1px solid #F0F0F1"}}></div>

        <div className='cta_secondary'>
            <p className='cta_main_text'>Challenges will be done, in teams of 3 or 4.
            You can invite your friends or we can team you up.</p>
            <h2 className='cta_secondary_call'>Invite your friends</h2>
        </div>
        
    </div>
  )
}

export default CTA