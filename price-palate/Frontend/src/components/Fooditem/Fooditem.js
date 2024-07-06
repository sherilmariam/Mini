import React, { useState, useContext } from 'react';
import './Fooditem.css';
import { assets } from '../../Assets/assets';
import Comparepopup from '../Comparepopup/Comparepopup';
import { storecontext } from '../../context/storecontext';

const Fooditem = ({ id, name, price, description, image, /*setShowCompare*/}) => {
    
    const [showCompare,setShowCompare] = useState(false);
    const {cartItems,addToCart,removeFromCart} = useContext(storecontext);
    
   
    return (
        <div className='food-item'>
            <div className='food-item-img-container'>
                <img className='food-item-image' src={image} alt="" />
                {!cartItems[id] ? (
                    <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
                ) : (
                    <div className='food-item-counter'>
                        <img onClick={() => { removeFromCart(id);setShowCompare(false);}} src={assets.remove_icon_red} alt="" />
                        <p>{cartItems[id]}</p>
                        <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
                        <button onClick ={()=> setShowCompare(true)}>
                          Compare               
                          </button> 
                          {showCompare && <Comparepopup />}
                          
                    </div>   
                )}
            </div>
            <div className='food-item-info'>
                <div className='food-item-name-rating'>
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className='food-item-desc'>{description}</p>
                <p className='food-item-price'>Rs.{price}</p>
            </div>
        </div>
    );
}

export default Fooditem;
