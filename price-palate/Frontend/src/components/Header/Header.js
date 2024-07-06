import React from 'react'
import './Header.css'

const Header = ({setShowAbout}) => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Price Palate</h2>
        <p>Navigating the best deals in Food Delivery</p>
        <button onClick={()=>setShowAbout(true)}>About Us</button>
      </div>


    </div>
  )
}

export default Header;