import React from 'react'
import './Aboutcontent.css'
import { assets } from '../../Assets/assets'

const Aboutcontent = ({ setShowAbout }) => {
  return (
    <div className='about-title'>
      <div className='about-container'>
        <div className='about-heading'>
        <h2> About Us </h2>
          <img className='cross-button'  onClick={() => setShowAbout(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className='about-body'>
        Price Palate website is used to find the best option between Swiggy and Zomato.
      You can opt for your favourite dish from your restaurant and click the compare button to see the
      best deal out of these two food delivery platorms.
      price Palate is developed by our team for the project and this website could be 
      further scaled up to all the other regions of our state incorporating the local food delivery apps
      so as to find the most feasible option.
        </div>
      </div>
    </div>
  )
}

export default Aboutcontent;
