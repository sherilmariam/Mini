import React from 'react'
import './Footer.css'
import { assets } from '../../Assets/assets'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
 <div className='footer' id="footer">
    <div className='footer-content'>
        <div className='footer-content-left'>
            <img src={assets.logo} alt="" className='logofooter' />
            <p>Price comparator website for finding the best deals in food delivery</p>
            <div className='footer-social-icons'>
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className='footer-content-center'>
            <h2>Company</h2>
            <ul>
               <Link to='/'><li>Home</li></Link>
              <Link to='/Aboutus' ><li>About Us</li></Link> 
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className='footer-content-right'>
            <h2>Get in Touch</h2>
            <ul>
                <li>+9895256175</li>
                <li>contact@pricepalate.com</li>
            </ul>
        </div>
    </div>
    <hr />
    <p className='footer-copyright'>Copyright 2024 @ Pricepalate.com - All Rights Reserved</p>
 </div>
  )
}

export default Footer