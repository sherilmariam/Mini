import React,{useState} from 'react'
import './Aboutus.css'
import Aboutcontent from '../../components/Aboutcontent/Aboutcontent';
import Navbar from '../../components/Navbar/Navbar';

const Aboutus = ({setShowAbout}) => {
  return (
    <div className='About-page'>
      <div className='about-page-container'>
     <div className='about-page-title'>
       <h2> About Us </h2> 
      </div>  
     <div className='about-page-body'>
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

export default Aboutus;
