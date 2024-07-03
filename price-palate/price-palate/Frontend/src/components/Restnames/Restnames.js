import React from 'react';
import './Restnames.css';
import Restaurantlist from '../RestaurantList/Restaurantlist';

const Restnames = ({ id, name, price, description, image, onClick }) => {
  return (
    <div className='rest-item' onClick={onClick}>
      <div className='rest-item-img-container'>
        <img className='rest-item-image' onClick={()=><Restaurantlist />} src={image} alt="" />
      </div>
      <div className='rest-item-info'>
        <div className='rest-item-name-rating'>
          <p>{name}</p>
        </div>
        <p className='rest-item-description'>{description}</p>
        <p className='resy-item-price'>{price}</p>
      </div>
    </div>
  );
};

export default Restnames;
