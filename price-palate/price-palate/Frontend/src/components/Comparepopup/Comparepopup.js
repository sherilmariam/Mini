import React, { useContext } from 'react';
import './Comparepopup.css';
import { swiggyDetails, zomatoDetails } from '../../Assets/assets';
import { Link } from 'react-router-dom'
import { assets } from '../../Assets/assets';
import { storecontext } from '../../context/storecontext';
const Comparepopup = () => {
  const {food}=useContext(storecontext)
  return (
    <div className="compare-popup">
      <div className="compare-details">
        <div className="swiggy">
          <h3>Swiggy</h3>
          <p>Cost:200</p>
          <p>Delivery:44</p>
          <p>GST:22.0</p>
          <p>Final Price:Rs.296</p>
         <Link to='https://www.swiggy.com/'> <button className='swiggybutton'>Pay Now</button></Link>
        </div>
        <div className="divider"></div>
        <div className="zomato">
          <h3>Zomato</h3>
          <p>Cost:200</p>
          <p>Delivery :54</p>
          <p>GST:30</p>
          <p>Final Price:314</p>
         <Link to='https://www.zomato.com/'> <button className='zomatobutton'>Pay Now</button> </Link>
        </div>
      </div>
    </div>
  );
};

export default Comparepopup;
